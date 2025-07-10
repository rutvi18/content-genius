# ContentGenius: Social Media Post Assistant

## AI-Powered Content Creation for Social Media

ContentGenius is a modern web application that leverages Generative AI to streamline the creation of engaging social media content. Users can specify a topic, desired tone, and target platform, and the AI will generate a tailored post draft, saving time and sparking creativity.

-----

## ✨ Features

  * **Intelligent Content Generation:** Automatically drafts social media posts based on user input.
  * **Tone & Platform Adaptation:** Generates content that matches the specified tone (e.g., enthusiastic, professional, humorous) and is optimized for the chosen platform (e.g., LinkedIn, Instagram, Twitter).
  * **Optional Call-to-Action:** Seamlessly integrates a desired call-to-action into the generated post.
  * **Intuitive User Interface:** A clean, responsive web interface for easy interaction.
  * **Secure API Handling:** Protects your OpenAI API key by making all AI calls via a secure backend API route.
  * **Copy to Clipboard:** Easily copy the generated post for quick use.

-----

## 🎯 Real-Life Use Cases

  * **Small Business Owners:** Quickly draft compelling posts for new products, promotions, or general engagement, even without a dedicated marketing team.
  * **Freelance Marketers / Social Media Managers:** Accelerate content ideation and drafting for multiple clients across various social platforms.
  * **Content Creators / Bloggers:** Generate engaging captions for visuals, short summaries for videos, or captivating intros for articles.
  * **Community Managers:** Craft impactful announcements, event promotions, or engaging questions for online communities.
  * **Non-Profit Organizations:** Develop persuasive messages for awareness campaigns, fundraising drives, or volunteer recruitment.

-----

## 🚀 Technology Stack

  * **Frontend:**
      * **React:** A declarative, component-based JavaScript library for building user interfaces.
      * **Next.js:** A React framework for production-grade applications, providing server-side rendering, routing, and API routes.
      * **TypeScript:** A superset of JavaScript that adds static types, enhancing code quality and developer experience.
      * **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
  * **Backend:**
      * **Next.js API Routes:** Serverless functions within the Next.js framework, acting as a secure intermediary for API calls.
      * **Node.js:** JavaScript runtime environment.
      * **OpenAI Node.js Library:** Official library for interacting with OpenAI's APIs.
  * **Generative AI Model:**
      * **OpenAI GPT-4o (or GPT-3.5 Turbo):** Powers the intelligent content generation.

-----

## 💻 Architecture

ContentGenius follows a client-server architecture:

1.  **Frontend (Next.js/React - Client-side):**

      * Provides the interactive user interface where users input details for their social media post.
      * Makes `POST` requests to the Next.js API route (`/api/generate-post`).
      * Displays the generated post and handles UI states (loading, errors).

2.  **Backend (Next.js API Route - Server-side):**

      * Acts as a secure proxy. It receives requests from the frontend.
      * **Crucially, it securely stores and uses the OpenAI API key**, preventing exposure to the client-side.
      * Constructs the specific prompt for the OpenAI LLM based on the user's input.
      * Calls the OpenAI Chat Completions API.
      * Sends the generated content back to the frontend.

This architecture ensures robust security for your API keys and provides a scalable foundation for the application.

-----

## ⚙️ Installation & Setup

Follow these steps to get ContentGenius up and running on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/rutvi18/content-genius.git
    cd content-genius
    cd my-content-genius
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up OpenAI API Key:**

      * Obtain your API key from your [OpenAI platform dashboard](https://platform.openai.com/api-keys).
      * Create a file named `.env.local` in the root directory of the `content-genius` project.
      * Add your API key to this file:
        ```
        OPENAI_API_KEY="your_openai_api_key_here"
        ```
      * **Security Note:** `.env.local` is automatically excluded from version control by Next.js's default `.gitignore`, ensuring your API key remains private.

-----

## 🚀 Usage

To run ContentGenius locally:

1.  **Start the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```
3.  Fill in the input fields for your desired post:
      * **Topic/Keywords:** The main subject of your post.
      * **Desired Tone:** How the post should sound (e.g., professional, enthusiastic).
      * **Target Platform:** Where the post will be published (e.g., LinkedIn, Instagram).
      * **Optional Call to Action:** What you want your audience to do.
4.  Click "Generate Post" and see the AI-powered draft appear\!

-----

## 📂 Project Structure

```
content-genius/
├── .env.local             # Your OpenAI API key (ignored by Git)
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── public/                # Static assets (images, etc.)
└── src/
    ├── app/               # Next.js App Router root
    │   ├── api/           # API Routes (Backend logic)
    │   │   └── generate-post/
    │   │       └── route.ts # Endpoint for generating posts
    │   ├── globals.css    # Global CSS styles
    │   ├── layout.tsx     # Root layout for the application
    │   └── page.tsx       # Main frontend UI component
    └── types/             # Optional: Custom TypeScript types (if needed)
```

-----

## 🤝 Contributing

Contributions are welcome\! If you have suggestions for improvements or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a Pull Request.

-----

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

## 🙏 Acknowledgements

  * **OpenAI:** For the powerful GPT models that enable content generation.
  * **Next.js:** For providing a robust framework for full-stack React applications.
  * **React:** For the foundational library to build interactive UIs.
  * **TypeScript:** For type safety and a superior development experience.
  * **Tailwind CSS:** For efficient and highly customizable styling.

-----
