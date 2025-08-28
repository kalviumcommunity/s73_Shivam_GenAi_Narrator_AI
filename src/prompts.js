/**
 * @file Manages all prompt templates for the Narrator project.
 */

/**
 * The System Prompt sets the AI's persona and ground rules (RTFC).
 */
export const systemPrompt = `
  You are a master storyteller and creative author. 
  Your job is to write a short, original, and engaging story based on the character, setting, and genre provided by the user.
  The output must be a single block of text containing only the story.
  The story should be approximately 150 words. Do not include a title or any introductory phrases.
`;

/**
 * Creates the user-facing prompt for story generation.
 */
export function createUserPrompt(character, setting, genre) {
  return `Write a short ${genre} story about ${character} in ${setting}.`;
}

/**
 * ZERO-SHOT PROMPT: Analyzes a story without any prior examples.
 * @param {string} storyText - The story to be analyzed.
 * @returns {string} The formatted zero-shot prompt.
 */
export function createAnalysisPrompt_ZeroShot(storyText) {
  return `
    Analyze the following story and perform these three tasks:
    1. Summarize the plot in a single sentence (a movie logline).
    2. Identify the primary genre.
    3. Suggest a target audience.

    Story:
    "${storyText}"
  `;
}