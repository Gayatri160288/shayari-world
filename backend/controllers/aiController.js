const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateShayari = async (req, res) => {
  try {
    const { title, category, mood, language, style, length } = req.body;

    const prompt = `
Write one beautiful Shayari.

Title: ${title}

Category: ${category}

Mood: ${mood}

Language: ${language}

Writing Style: ${style}

Length: ${length}

Requirements:
- Do not include any explanation.
- Return only the Shayari.
- Make it original and emotionally engaging.
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
