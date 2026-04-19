🏟️ GravityFlow: The Smart Stadium Ecosystem
GravityFlow is a next-generation web application designed to revolutionize the stadium experience. Built with a focus on real-time synchronization and agentic AI, it bridges the gap between fans, staff, and vendors through a unified "Digital Twin" environment.

🚀 Key Features
🤖 Gemini-Powered GravityBot
Multilingual Support: Communicates fluently in Hindi, English, and Hinglish.

Contextual Intelligence: Knows your seat number and order status without being told twice.

Spatial Actions: Automatically highlights routes to seats on the live radar map based on conversation.

🗺️ Live Radar & Smart Routing
Heatmap Visualization: Real-time crowd density tracking.

Dynamic Pathfinding: Visual "Green Paths" to guide fans away from congestion.

💳 Universal Commerce & Sync
Multi-Device Coordination: Orders placed by Fans (Mobile) appear instantly on the Vendor Dashboard (Laptop) without refreshing.

Local Currency Support: Full menu and transaction history in ₹ (INR).

🆘 Integrated Safety Hub
Seat-to-Steward Alerts: Direct SOS button for immediate assistance.

Emergency Overrides: Stadium-wide alerts that lock UI for safety instructions during incidents.

🛠️ Technical Stack
Frontend: Next.js 15 (App Router), Tailwind CSS

AI Layer: Google Gemini API

Backend: Node.js Centralized API for Universal State Sync

Framework: Google Antigravity

Design: Glassmorphic Dark Mode UI

📦 Getting Started
Prerequisites
Node.js (LTS version)

A valid Gemini API Key

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/gravityflow.git
cd gravityflow
Install dependencies:

Bash
npm install
Set up environment variables:
Create a .env.local file and add your Gemini API Key:

Code snippet
GEMINI_API_KEY=your_key_here
Run the development server:

Bash
npm run dev
Access the dashboards:

Fan View: localhost:3000/fan

Staff View: localhost:3000/staff

Vendor View: localhost:3000/vendor

🤖 Built with Google Antigravity
Developed using Agent-First Engineering principles. We utilized autonomous agents to orchestrate the UI build, verify pathfinding logic, and simulate live stadium traffic for stress testing.
