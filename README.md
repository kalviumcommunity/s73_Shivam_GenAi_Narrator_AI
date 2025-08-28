

# 📖 Narrator – Your Personal AI Storyteller

Narrator is a lightweight **command-line application** built with **Node.js** that uses **Generative AI** to craft unique stories from your ideas. Just provide a character, a setting, and a genre, and let the AI weave them into an original tale in seconds.

---

## ✨ Features

* **Dynamic Story Generation** – Every story is unique, created on the fly.
* **Customizable Inputs** – Easily change character, setting, and genre.
* **Simple CLI** – No complex setup; run a single file to start storytelling.
* **Lightweight & Fast** – Powered by Node.js for quick performance.

---

## 🛠 Tech Stack

* **Runtime:** Node.js
* **AI Library:** `@google/generative-ai`
* **Model:** Google Gemini Pro

---

## ⚙️ Setup & Installation

### ✅ Prerequisites

* **Node.js v18+** and **npm** installed
* **Google AI API Key** – Get a free key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### 🚀 Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Chico2118/narrator.git
   cd narrator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure API Key**
   Open `story-generator.js` and replace:

   ```javascript
   const API_KEY = "YOUR_API_KEY";
   ```

   with your actual key from Google AI Studio.

---

## ▶️ Usage

Run the app from your terminal:

```bash
node story-generator.js
```

The script will instantly generate and print a unique story to the console.

---

## 💡 Future Improvements

* [ ] Add CLI user input support
* [ ] Build a web interface 
* [ ] Save generated stories to a text file 

---

## 📄 License

This project is licensed under the **MIT License**.

---
