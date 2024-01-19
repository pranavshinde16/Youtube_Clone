<div align="start">
  <br />
    <a href="#" target="_blank">
      <img src="https://github.com/pranavshinde16/Images/blob/main/project-2_img1.png" width="500" height="400" alt="Project Banner">
    </a>
    <a href="#" target="_blank">
      <img src="https://github.com/pranavshinde16/Images/blob/main/project-2_img3.png" width="500" height="400" alt="Project Banner">
    </a>
  <br />
  
  <h1 align="center">Youtube Clone - Video Streaming Application</h1>
  
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Developed a YouTube-inspired clone using React.js, Tailwind CSS, and Node.js. The application seamlessly integrates with the YouTube public API, offering dynamic search functionality and instant category-based video feeds. Explore a user-friendly interface with a responsive design, providing an immersive experience for discovering and enjoying a wide range of video content.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- React.js
- TailwindCSS
- Javascript
- HTML5
- Rapid API

## <a name="features">🔋 Features</a>

👉**Dynamic Search Bar:** Implemented a robust search bar using React.js, enabling users to enter keywords and find relevant videos. Leveraged the YouTube public API to retrieve real-time search results, ensuring accuracy and up-to-date content..
👉**Categorized Sidebar:** Designed a user-friendly sidebar with distinct categories such as trending, shorts, movies, music, and news.Enabled seamless navigation, allowing users to click on a category and instantly populate the feed with related videos.
👉**Video Player Integration:** Integrated a video player component to allow users to watch selected videos directly within the application.
👉**Comprehensive Video Details:** Displayed comprehensive information about each video, including title, description, upload date, and view counts.
Integrated features for users to share videos on social media platforms and embed them on external websites.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials 

**Running the Project**

```bash
npm start or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

