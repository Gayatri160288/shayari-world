const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateShayari = async (req, res) => {
  try {
    const { title, category, mood } = req.body;

    const prompt = `
Write a beautiful Hindi Shayari.

Category: ${category}
Mood: ${mood}
Title: ${title}

Rules:
- Maximum 4 lines
- Original
- Emotional
- Return ONLY the shayari.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      text: response.text,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate shayari",
    });
  }
};

module.exports = {
  generateShayari,
};
