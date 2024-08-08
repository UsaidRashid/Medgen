const Brand = require("../models/brands");
const Generic = require("../models/generics");
const Store = require("../models/stores");
const Request = require("../models/requests");

module.exports.addBrand = async (req, res) => {
  try {
    let medicine = ({ name, code, salt, batch, price, alternatives } =
      req.body);

    if (!name || !code || !batch || !price || !salt)
      return res.status(400).json({
        message: "Some important information about medicine is missing...",
      });

    name = name.toLowerCase();

    const newBrand = new Brand({
      name,
      code,
      salt,
      batch,
      price,
      alternatives: [],
    });
    await newBrand.save();

    const alternativeIds = [];
    for (const alternative of alternatives) {
      const newAlt = new Generic({
        ...alternative,
        alternativeFor: [newBrand._id],
      });
      await newAlt.save();
      alternativeIds.push(newAlt._id);
    }

    newBrand.alternatives = alternativeIds;
    await newBrand.save();

    return res
      .status(200)
      .json({ message: "Brand Medicine added successfully", newBrand });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.addGeneric = async (req, res) => {
  try {
    let medicine = ({ name, code, salt, batch, price, alternativeFor } =
      req.body);

    if (!name || !code || !salt || !batch || !price)
      return res.status(400).json({
        message: "Some important information about medicine is missing...",
      });
    name = name.toLowerCase();

    const newGeneric = new Generic({
      name,
      code,
      salt,
      batch,
      price,
      alternativeFor: [],
    });
    await newGeneric.save();

    const alternativeIds = [];
    for (const alternative of alternativeFor) {
      const newAlt = new Brand({
        ...alternative,
        alternatives: [newGeneric._id],
      });
      await newAlt.save();
      alternativeIds.push(newAlt._id);
    }

    newGeneric.alternativeFor = alternativeIds;
    await newGeneric.save();

    return res
      .status(200)
      .json({ message: "Generic Medicine Added Successfully!", newGeneric });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchRequests = async (req, res) => {
  try {
    const response = await Request.find({});

    return res
      .status(200)
      .json({ message: "Requests fetched successfully!", response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchDashboard = async (req, res) => {
  try {
    const generics = await Generic.find({});

    const brands = await Brand.find({});

    const requests = await Request.find({});

    const stores = await Store.find({});

    return res.status(200).json({
      messsage: "Dashboard Updated Successfully!",
      genCnt: generics.length,
      brandCnt: brands.length,
      reqCnt: requests.length,
      storeCnt: stores.length,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.find({}).populate("alternatives");
    return res
      .status(200)
      .json({ message: "Brand Medicines Fetched Successfully", brands });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchGenerics = async (req, res) => {
  try {
    const generics = await Generic.find({}).populate("alternativeFor");
    return res
      .status(200)
      .json({ message: "Generic Medicines Fetched Successfully", generics });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.deleteRequests = async (req, res) => {
  try {
    const { _id } = req.body;
    await Request.deleteOne({ _id });
    return res.status(200).json({ message: "Deleted Medicine Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.deleteBrand = async (req, res) => {
  try {
    const { _id } = req.body;
    await Brand.deleteOne({ _id });
    return res.status(200).json({ message: "Deleted Medicine Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.deleteGeneric = async (req, res) => {
  try {
    const { _id } = req.body;
    await Generic.deleteOne({ _id });
    return res.status(200).json({ message: "Deleted Medicine Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
