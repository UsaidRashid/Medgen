const { Client } = require("@elastic/elasticsearch");
const Generic = require("../models/generics");
const Brand = require("../models/brands");
const fs = require("fs");

const client = new Client({
  node: "https://localhost:9200",
  auth: {
    username: "elastic",
    password: "elastic",
  },
  tls: {
    ca: fs.readFileSync("./http_ca.crt"),
    rejectUnauthorized: false,
  },
});

async function checkConnection() {
  try {
    console.log("Attempting to connect to Elasticsearch...");
    await client.ping();
    console.log("Elasticsearch connected");
  } catch (error) {
    console.error("Elasticsearch connection error:", error);
    if (error.meta) {
      console.error("Error meta information:", error.meta);
    }
    console.error("Error details:", error.body || error);
  }
}

async function indexData() {
  try {
    console.log("Fetching data from MongoDB...");
    const generics = await Generic.find();
    console.log(`Fetched ${generics.length} generics from MongoDB`);

    if (generics.length === 0) {
      console.log("No generics found to index.");
      return;
    }

    const bulkOps = generics.flatMap((generic) => [
      { index: { _index: "generics", _id: generic._id.toString() } },
      {
        name: generic.name,
        code: generic.code,
        salt: generic.salt,
        batch: generic.batch,
        price: generic.price,
        alternativeFor: generic.alternativeFor,
      },
    ]);

    console.log("Indexing data to Elasticsearch...");
    const bulkResponse = await client.bulk({
      refresh: true,
      body: bulkOps,
    });

    console.log("Bulk response:", bulkResponse);

    if (bulkResponse.errors) {
      console.error("Bulk indexing errors:", bulkResponse.items);
    } else {
      console.log("Initial data indexed to Elasticsearch");
    }
  } catch (error) {
    console.error("Error indexing data:", error);
  }
}

async function syncElasticsearch() {
  console.log("Starting to sync MongoDB changes to Elasticsearch...");

  const changeStream = Generic.watch();

  changeStream.on("change", async (change) => {
    try {
      console.log("Change detected:", change);

      let document = change.fullDocument;

      // If full document is not available, fetch it
      if (!document) {
        console.log(`Fetching full document for ID ${change.documentKey._id}`);
        document = await Generic.findById(change.documentKey._id);
        if (!document) {
          console.log(`Document with ID ${change.documentKey._id} not found`);
          return;
        }
      }

      switch (change.operationType) {
        case "insert":
        case "update":
          console.log(`Indexing/Updating generic ${document._id}`);
          await client.index({
            index: "generics",
            id: document._id.toString(),
            body: {
              name: document.name,
              code: document.code,
              salt: document.salt,
              batch: document.batch,
              price: document.price,
              alternativeFor: document.alternativeFor,
            },
          });
          console.log(`Indexed/Updated generic ${document._id}`);
          break;

        case "delete":
          console.log(`Deleting generic ${change.documentKey._id}`);
          await client.delete({
            index: "generics",
            id: change.documentKey._id.toString(),
          });
          console.log(`Deleted generic ${change.documentKey._id}`);
          break;

        default:
          console.log(`Unhandled operation type: ${change.operationType}`);
      }
    } catch (error) {
      console.error("Error processing change stream:", error);
    }
  });

  changeStream.on("error", (error) => {
    console.error("Change stream error:", error);
  });
}

module.exports.generiSearchBySalts = async (saltsArray) => {
  try {
    if (!Array.isArray(saltsArray) || saltsArray.length === 0) {
      throw new Error("Salts array must be a non-empty array");
    }

    const result = await client.search({
      index: "generics",
      body: {
        query: {
          bool: {
            should: saltsArray.map((salt) => ({
              term: {
                "salt.keyword": salt,
              },
            })),
            minimum_should_match: 1,
          },
        },
      },
    });

    console.log("Elasticsearch result:", result);

    return result.hits.hits;
  } catch (error) {
    console.error("Error searching by salts:", error);
    throw error;
  }
};

async function indexData2() {
  try {
    console.log("Fetching data from MongoDB...");
    const brands = await Brand.find();
    console.log(`Fetched ${brands.length} brands from MongoDB`);

    if (brands.length === 0) {
      console.log("No brands found to index.");
      return;
    }

    const bulkOps = brands.flatMap((brand) => [
      { index: { _index: "brands", _id: brand._id.toString() } },
      {
        name: brand.name,
        code: brand.code,
        salt: brand.salt,
        batch: brand.batch,
        price: brand.price,
        alternatives: brand.alternatives,
      },
    ]);

    console.log("Indexing data to Elasticsearch...");
    const bulkResponse = await client.bulk({
      refresh: true,
      body: bulkOps,
    });

    console.log("Bulk response:", bulkResponse);

    if (bulkResponse.errors) {
      console.error("Bulk indexing errors:", bulkResponse.items);
    } else {
      console.log("Initial data indexed to Elasticsearch");
    }
  } catch (error) {
    console.error("Error indexing data:", error);
  }
}

async function syncElasticsearch2() {
  console.log("Starting to sync MongoDB changes to Elasticsearch...");

  const changeStream = Brand.watch();

  changeStream.on("change", async (change) => {
    try {
      console.log("Change detected:", change);

      let document = change.fullDocument;

      if (!document) {
        console.log(`Fetching full document for ID ${change.documentKey._id}`);
        document = await Brand.findById(change.documentKey._id);
        if (!document) {
          console.log(`Document with ID ${change.documentKey._id} not found`);
          return;
        }
      }

      switch (change.operationType) {
        case "insert":
        case "update":
          console.log(`Indexing/Updating brand ${document._id}`);
          await client.index({
            index: "brands",
            id: document._id.toString(),
            body: {
              name: document.name,
              code: document.code,
              salt: document.salt,
              batch: document.batch,
              price: document.price,
              alternatives: document.alternatives,
            },
          });
          console.log(`Indexed/Updated brand ${document._id}`);
          break;

        case "delete":
          console.log(`Deleting brand ${change.documentKey._id}`);
          await client.delete({
            index: "brands",
            id: change.documentKey._id.toString(),
          });
          console.log(`Deleted brand ${change.documentKey._id}`);
          break;

        default:
          console.log(`Unhandled operation type: ${change.operationType}`);
      }
    } catch (error) {
      console.error("Error processing change stream:", error);
    }
  });

  changeStream.on("error", (error) => {
    console.error("Change stream error:", error);
  });
}

module.exports.brandSearchBySalts = async (saltsArray) => {
  try {
    if (!Array.isArray(saltsArray) || saltsArray.length === 0) {
      throw new Error("Salts array must be a non-empty array");
    }

    const result = await client.search({
      index: "brands",
      body: {
        query: {
          bool: {
            should: saltsArray.map((salt) => ({
              term: {
                "salt.keyword": salt,
              },
            })),
            minimum_should_match: 1,
          },
        },
      },
    });

    console.log("Elasticsearch result:", result);

    return result.hits.hits;
  } catch (error) {
    console.error("Error searching by salts:", error);
    throw error;
  }
};

async function initializeElasticsearch() {
  try {
    await checkConnection();
    await indexData();
    await syncElasticsearch();
    await indexData2();
    await syncElasticsearch2();
  } catch (error) {
    console.error("Error initializing Elasticsearch:", error);
  }
}

initializeElasticsearch();
