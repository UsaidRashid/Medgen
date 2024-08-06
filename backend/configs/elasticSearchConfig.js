const { Client } = require("@elastic/elasticsearch");
const Generic = require("../models/generics");
const fs = require('fs');

const client = new Client({
  node: "https://localhost:9200",
  auth: {
    username: "elastic",
    password: "elastic",
  },
  tls: {
    ca: fs.readFileSync('C:\\Users\\ASUS\\Downloads\\elasticsearch-8.14.3-windows-x86_64\\elasticsearch-8.14.3\\config\\certs\\http_ca.crt'),
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

      if (
        change.operationType === "insert" ||
        change.operationType === "update"
      ) {
        const generic = change.fullDocument;
        console.log(`Indexing/Updating generic ${generic._id}`);

        await client.index({
          index: "generics",
          id: generic._id.toString(),
          body: {
            name: generic.name,
            code: generic.code,
            salt: generic.salt,
            batch: generic.batch,
            price: generic.price,
            alternativeFor: generic.alternativeFor,
          },
        });
        console.log(`Indexed/Updated generic ${generic._id}`);
      }
      if (change.operationType === "delete") {
        console.log(`Deleting generic ${change.documentKey._id}`);

        await client.delete({
          index: "generics",
          id: change.documentKey._id.toString(),
        });
        console.log(`Deleted generic ${change.documentKey._id}`);
      }
    } catch (error) {
      console.error("Error processing change stream:", error);
    }
  });

  changeStream.on("error", (error) => {
    console.error("Change stream error:", error);
  });
}

async function initializeElasticsearch() {
  await checkConnection();
  await indexData();
  await syncElasticsearch();
}

module.exports = { initializeElasticsearch };
