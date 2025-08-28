/**
 * @file Implements a full evaluation pipeline for the Narrator project.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- Configuration ---
const API_KEY = "YOUR_API_KEY";
const genAI = new GoogleGenerativeAI(API_KEY);
const storyModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const judgeModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

// --- 1. The Dataset ---
const evaluationDataset = [
  // ... (Paste the 5 test cases from the previous response here) ...
];

// --- Story Generation Function ---
async function generateStory(inputs) {
  // ... (Code for generateStory function) ...
}

// --- 2. The Judge Prompt & Evaluation Function ---
async function evaluateStory(inputs, generatedStory, expectedOutcome) {
  // ... (Code for evaluateStory function with the judge prompt) ...
}

// --- 3. The Testing Framework ---
async function runEvaluationPipeline() {
  console.log("--- 🚀 Starting Evaluation Pipeline ---");
  for (const testCase of evaluationDataset) {
    console.log(`\n--- Running Test Case: ${testCase.id} ---`);
    const generatedStory = await generateStory(testCase.inputs);
    console.log(`\nGenerated Story:\n"${generatedStory}"`);
    const evaluation = await evaluateStory(testCase.inputs, generatedStory, testCase.expected_outcome);
    console.log(`\nEvaluation Result:`);
    console.log(`  - Score: ${evaluation.score}/5`);
    console.log(`  - Reasoning: ${evaluation.reasoning}`);
  }
  console.log("\n--- ✅ Evaluation Pipeline Finished ---");
}

runEvaluationPipeline();