# Stock Stack 📈

Stock Stack is a comprehensive stock market-related application built with the latest technologies to provide real-time market insights, personalized tracking, and AI-powered data.

## 🚀 Core Features

- **Real-time Market Data**: Comprehensive market overview, quotes, and heatmaps via TradingView widgets.
- **Stock Search & Details**: Advanced search functionality with detailed company information powered by Finnhub API.
- **User Authentication**: Secure authentication system using BetterAuth with support for various providers.
- **Personalized Watchlists**: Track your favorite stocks and manage your portfolio.
- **AI-Powered Insights**: Deep stock analysis and company details leveraging Google Gemini AI.
- **Background Jobs & Alerts**: Robust background processing and personalized alerts using Inngest.
- **Email Notifications**: Seamless email delivery for alerts and updates via Nodemailer.
- **Modern UI**: Fully responsive, dark-themed interface built with Shadcn UI and Tailwind CSS 4.

## 🛠️ Technology Stack

### Frontend & Core
- **Next.js 16 (App Router)**: Modern React framework for SSR, ISR, and dynamic routing.
- **React 19**: The latest version of React for efficient UI rendering.
- **Tailwind CSS 4**: Next-generation utility-first CSS framework.
- **Shadcn UI**: Beautifully designed, accessible components.
- **Lucide React**: Comprehensive icon library.
- **Sonner**: Elegant toast notifications.

### Backend & Database
- **BetterAuth**: Powerful authentication library for Next.js.
- **MongoDB / Mongoose**: Scalable NoSQL database and ODM for data persistence.
- **Inngest**: Serverless queue and background job management.
- **Nodemailer**: Standard Node.js library for email sending.
- **Finnhub API**: Source for real-time stock and company data.
- **Gemini AI API**: Integration for AI-driven financial insights.

## 📂 Application Entry Points

- **Root Layout**: `app/layout.tsx` - Sets up the global context, themes, and notifications.
- **Main Home Page**: `app/(root)/page.tsx` - The central dashboard featuring market overviews and heatmaps.
- **Auth Routes**: `app/(Auth)/layout.tsx` - Handles sign-in, sign-up, and user session management.
- **Stock Details**: `app/(root)/stocks/[symbol]/page.tsx` - Dynamic routing for detailed stock analysis.
- **Background Actions**: `lib/inngest/` and `lib/actions/` - Core business logic and background processing.

## ⚙️ Getting Started

### Prerequisites
- Node.js (Latest LTS)
- MongoDB account (Atlas or local)
- API keys for Finnhub and Gemini AI

### Installation

1.  **Clone the repository**:
    ```bash
    git clone {repository-url}
    cd stock_stack
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    # App
    NEXT_PUBLIC_BASE_URL=http://localhost:3000

    # Database
    MONGODB_URI=your_mongodb_connection_string

    # Authentication
    BETTER_AUTH_SECRET=your_auth_secret
    BETTER_AUTH_URL=http://localhost:3000

    # APIs
    GEMINI_API_KEY=your_gemini_api_key
    NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

    # Email
    NODEMAILER_EMAIL=your_email
    NODEMAILER_PASSWORD=your_app_password
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚢 Git Workflow

To contribute or manage features, please follow this workflow:

1.  **Create a feature branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
2.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "feat: description of your change"
    ```
3.  **Push to remote**:
    ```bash
    git push --set-upstream origin feature/your-feature-name
    ```
4.  **Merge to main**:
    ```bash
    git checkout main
    git pull
    git merge feature/your-feature-name
    ```

---
Built with ❤️ for the Stock Market Community.
