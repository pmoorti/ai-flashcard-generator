import dotenv from "dotenv";
import { GoogleGenerativeAI } from '@google/generative-ai'
import { LegendToggle } from "@mui/icons-material";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMMA_API_KEY)

export async function generateFlashcardsWithGemma(text) {
    // Ensure we have a valid API key
    if (!process.env.GEMMA_API_KEY) {
      throw new Error('GEMMA_API_KEY is not set in the environment variables');
    }
  
    try {
      // Initialize the model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      // Construct the prompt
      const prompt = `Generate 18 flashcards based on the following text: "${text}". 
      Each flashcard should have a front (question or concept) and a back (answer or explanation).
      Please format the output as a JSON array of objects, each with 'front' and 'back' properties.
      For example:
      [
        { "front": "What is...", "back": "It is..." },
        { "front": "Who discovered...", "back": "The person who..." }
      ]`;
  
      // Generate content
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let generatedText = response.text();

      console.log('Raw generated text:', generatedText);

      // Remove any markdown formatting
      generatedText = generatedText.replace(/```json\n?|\n?```/g, '').trim();

      console.log('Cleaned generated text:', generatedText);
      // Parse the generated text as JSON
      const flashcards = JSON.parse(generatedText);

      if (!Array.isArray(flashcards) || flashcards.length === 0) {
        throw new Error('Generated content is not a valid array of flashcards');
      }
  
      return flashcards;
    } catch (error) {
      console.error('Error generating flashcards with Gemma:', error);
      throw new Error(`Failed to generate flashcards: ${error.message}`);
    }
  }