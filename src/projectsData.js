// src/projectsData.js

// Add tags to each project for categorization
export const projects = [
 
  {
  title: "AI Interview Coach",
  description: "A full-stack AI-powered interview preparation platform that generates personalized HR and technical questions, analyzes user responses using machine learning, and provides real-time feedback to improve communication and technical skills.",
  image: "/images/ai.png",
  liveLink: "https://ai-interview-coach-frontend-git-main-talats-projects-f465924f.vercel.app",
  repoLink: "https://github.com/t-siddiqui/ai-interview-coach_backend",
  tags: ["React", "Node.js", "Express", "Python", "Machine Learning", "MongoDB", "Full Stack", "AI"]
},
{
    title: "Weather App",
    description: "A clean and simple web app to get real-time weather information for any city.",
    image: "/images/weather.png", // Add your project image path or URL here
    liveLink: "https://t-siddiqui.github.io/weather-website/",
    repoLink: "https://github.com/t-siddiqui/weather-website",
    tags: ["HTML", "JS", "CSS"]
  },
  {
    title: "AI UV Tracker",
    description: "Track your tan and monitor UV impact with our smart skin analyzer, built with React, FastAPI, and a custom CNN model.",
    image: "/images/uv.png", // Add your project image path or URL here
    liveLink: "https://ai-uv-tracker-app.vercel.app",
    repoLink: "https://github.com/t-siddiqui/ai-uv-tracker-app",
    tags: ["React","Python", "FastAPI", "Machine Learning"]
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio, built with React, Tailwind CSS, and Framer Motion.",
    image: "/images/port.png", // Add your project image path or URL here
    liveLink: "https://talat-portfolio.df.r.appspot.com",
    repoLink: "https://github.com/t-siddiqui/Portfolio-Website",
    tags: ["React", "Tailwind CSS"]
  },
  {
    title: "Movies Recommendation App",
    description: "A personalized movie discovery and recommendation web application",
    image: "/images/movie.png", // Add your project image path or URL here
    liveLink: "https://movie-recommendation-app-sage.vercel.app/",
    repoLink: "https://github.com/t-siddiqui/movie-recommendation-app",
    tags: ["React", "Node.js", "MongoDB", "Full Stack","RestfulAPI"]
  },
    {
    title: "Hackathon Website",
    description: "HackHub is a comprehensive platform designed to streamline the organization and participation of college-levelhackathons",
    image: "/images/site-alt.png", // Add your project image path or URL here
    liveLink: "https://hackhub-mzj8.onrender.com/hackathon",
    repoLink: "https://github.com/rasikarakhewar3010/HackHub",
    tags: ["HTML", "JS", "CSS", "Node.js", "MongoDB", "Full Stack"]
  },
   {
    title: "BloomSkin : Skin Analyzer",
    description: "BloomSkin is an AI powered platform which analyses the acne on the face",
    image: "/images/Bloom.png", // Add your project image path or URL here
    liveLink: "https://bloom-skin-frontend.onrender.com/",
    repoLink: " https://github.com/rasikarakhewar3010/Bloom-Skin",
    tags: ["React","Python", "Machine Learning","MongoDB", "Full Stack"]
  },
  {
  title: "TechWare : Computer Hardware Learning Platform",
  description: "TechWare is an interactive platform that helps users learn computer hardware components, installation, and troubleshooting through detailed content and practical guides.",
  image: "/images/site-alt.png", // Add your project image path or URL here
  liveLink: "", // Add your deployed link if available
  repoLink: "", // Add your GitHub repository link
  tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "EJS", "MySQL", "Full Stack"]
}
  
  
];

// Get all unique tags from the projects
export const projectTags = ["All", ...new Set(projects.flatMap(p => p.tags))];