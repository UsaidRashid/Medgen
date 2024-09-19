const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports.respond = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const user_text = req.body.text;

    const prompt = `Consider a Patient is asking you a general question , so generate your response as a doctor . Provide a concise and informative response to the following query, using only plain text and avoiding any special characters, symbols, or punctuation (only full stops & commas are allowed) :\n"${user_text}`;

    const result = await model.generateContent(prompt);
    const rest = result.response.candidates[0].content.parts[0].text;

    return res
      .status(200)
      .json({ message: "Response Generated Successfully", result: rest });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
