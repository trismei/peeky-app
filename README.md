# 🍪 Peeky – A Friendly Privacy Companion

Peeky is a modern, minimal Chrome extension that scans cookie pop-ups, explains what they *really* mean in plain English, and gives users clear, simple choices to take control of their digital footprint.

> "Because 'Accept All' doesn't mean you have to say yes to everything."

---

## 🚀 Features

- 🔍 **Auto-detects cookie pop-ups** on any website
- 🧠 **Classifies cookies** into essential, analytics, ads, and third-party
- 💬 **Explains cookie policies** in clear, human language
- 🔐 **Privacy Score (A–F)** to rate each site’s tracking behavior
- ✅ **Quick Actions** like:
  - Accept only essential
  - Block tracking cookies
  - Auto-dismiss banner
- 📒 (Optional) **Local history log** of trackers encountered
- ✨ **Minimal, friendly UI** with Tailwind styling

---

## 📁 Folder Structure
peeky/
├── public/
│ └── icons/
├── src/
│ ├── popup/ # React popup UI
│ ├── content/ # DOM scanner & detection logic
│ ├── background/ # Message passing if needed
│ └── styles/ # Tailwind + globals
├── manifest.json # Chrome extension config (Manifest V3)
├── tailwind.config.js # Tailwind setup
├── vite.config.js # Build config (if using Vite)
└── README.md



---

## 🛠 Tech Stack

- **React.js** – UI components
- **Tailwind CSS** – Fast, modern styling
- **Chrome Extensions (Manifest V3)** – Core extension API
- **JavaScript (ES6)** – Content scripts & detection logic
- **Chrome Storage API** – Save user choices locally
- **(Optional)** OpenAI GPT-4 API – Explain tracking tools in plain English

---

## 📦 Getting Started

### 1. Clone the repo
git clone https://github.com/yourusername/peeky.git
cd peeky

### 2. Install dependencies
npm install

### 3. Build the extension
npm run build

### 4. Load in Chrome
Go to chrome://extensions
Enable Developer Mode
Click Load Unpacked
Select the dist/ or build/ folder

## 🧪 Development Scripts
Command	Action
npm run dev	Start dev server w/ hot reload
npm run build	Build extension for production
npm run format	Format code with Prettier

## 💡 Vision
Peeky starts with cookie clarity — but our mission is bigger:
To help everyday users see through digital dark patterns, feel more in control online, and make informed, easy decisions about their data.

## 🧁 Credits
Created by @you with cookies, sass, and a love for digital rights.

Logo, icons, and UI design coming soon 💅
