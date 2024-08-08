const Brand = require("../models/brands");
const Generic = require("../models/generics");
const Request = require("../models/requests");
const {
  generiSearchBySalts,
  brandSearchBySalts,
} = require("../configs/elasticSearchConfig");

module.exports.brandMedicine = async (req, res) => {
  try {
    let { name } = req.body;
    name=name.toLowerCase();
    const medicine = await Brand.findOne({ name }).populate("alternatives");
    if (!medicine)
      return res.status(201).json({
        message: "The requested Medicine is not present in our database",
      });
    return res
      .status(200)
      .json({ message: "Brand Medicine fetched successfully", medicine });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports.genericMedicine = async (req, res) => {
  try {
    let { name } = req.body;
    const medicine = await Generic.findOne({ name }).populate("alternativeFor");
    if (!medicine)
      return res.status(201).json({
        message: "The requested Medicine is not present in our database",
      });
    return res
      .status(200)
      .json({ message: "Generic Medicine Fetched Successfully", medicine });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports.compareMeds = async (req, res) => {
  try {
    const { genName, brandName } = req.body;
    const brands = await Brand.findOne({ name: brandName });
    const generics = await Generic.findOne({ name: genName });
    return res.status(200).json({
      message: "compare details fetch successfully",
      generics,
      brands,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports.requestMedicine = async (req, res) => {
  try {
    const { name, email, medName, message } = req.body;
    if (!name || !email || !medName)
      return res
        .status(400)
        .json({ message: "Please Fill in all the details" });
    const newReq = new Request(req.body);
    await newReq.save() ;
    return res
      .status(200)
      .json({ message: "request generated successfully", newReq });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports.GenericElasticSearch = async (req, res) => {
  try {
    const { salts } = req.body;

    if (!salts || salts==='' || salts===undefined || salts===null || salts.length===0) return res.status(400).json({ message: "Salt Array Required" });

    const saltsArray = salts.split(",").map((salt) => salt.trim().toLowerCase());

    if (saltsArray.length === 0)
      return res.status(400).json({ message: "No valid salts provided" });

    const results = await generiSearchBySalts(saltsArray);
    return res.status(200).json({ message: "Searched Successful!", results });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports.BrandElasticSearch = async (req, res) => {
  try {
    const { salts } = req.body;

    if (!salts || salts==='' || salts===undefined || salts===null || salts.length===0) return res.status(400).json({ message: "Salt Array Required" });

    const saltsArray = salts.split(",").map((salt) => salt.trim().toLowerCase());

    if (saltsArray.length === 0)
      return res.status(400).json({ message: "No valid salts provided" });

    const results = await brandSearchBySalts(saltsArray);
    return res.status(200).json({ message: "Searched Successful!", results });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};
