import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTutor = async (
  question: string,
  context?: string
): Promise<string> => {
  const systemInstruction = `
    You are an expert AWS Machine Learning instructor specialized in SageMaker.
    Answer the user's question clearly and concisely.
    If the question is about a specific algorithm, refer to its typical use cases, hyperparameters, and instance recommendations.
    Use the provided context if available.
    Keep the tone encouraging and professional.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Context: ${context || 'General AWS SageMaker Study'}\n\nQuestion: ${question}`,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while contacting the AI Tutor. Please check your API key and try again.";
  }
};