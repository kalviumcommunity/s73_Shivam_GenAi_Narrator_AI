

const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- Configuration ---
const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- RTFC Prompt Engineering ---

/**
 * The System Prompt sets the AI's persona and ground rules.
 * R - Role: A master storyteller.
 * T - Task: Write a short story based on user inputs.
 * F - Format: A single block of text.
 * C - Constraints: ~150 words, no title, no extra phrases.
 */
const systemPrompt = `
  You are a master storyteller and creative author. 
  Your job is to write a short, original, and engaging story based on the character, setting, and genre provided by the user.
  The output must be a single block of text containing only the story.
  The story should be approximately 150 words. Do not include a title, any introductory phrases like "Here is your story:", or any concluding remarks.
`;

/**
 * Creates the user-facing prompt based on their inputs.
 * @param {string} character - The main character of the story.
 * @param {string} setting - The setting of the story.
 * @param {string} genre - The genre of the story.
 * @returns {string} The formatted user prompt.
 */
function createUserPrompt(character, setting, genre) {
  return `Write a short ${genre} story about ${character} in ${setting}.`;
}

// --- Main Application Logic ---

async function generateStory() {
  try {
    // 1. Define user inputs for this specific story
    const character = "a lone astronaut named Jax";
    const setting = "an abandoned space station orbiting a black hole";
    const genre = "suspenseful sci-fi";

    // 2. Create the specific user prompt for this request
    const userPrompt = createUserPrompt(character, setting, genre);

    // 3. Start a chat session with the system prompt as the foundation
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am ready to tell a story." }], // A priming response
        },
      ],
      generationConfig: {
        maxOutputTokens: 250, // A technical constraint on length
      },
    });

    console.log("--- 🤖 Generating your story based on the prompts... ---");

    // 4. Send the user's request and get the story
    const result = await chat.sendMessage(userPrompt);
    const response = await result.response;
    const story = response.text();

    // 5. Display the final, clean story
    console.log("\n--- Your Story ---");
    console.log(story);
    
  } catch (error) {
    console.error("\nAn error occurred:", error);
  }
}

// Run the application
generateStory();