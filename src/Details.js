// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Shreya Malgi",
  tagline: "I build things for the web.",
  img: profile,
  about: `Being a computer science enthusiast, I am inclined toward web development and clouds services.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Developer",
    Company: `Codsoft`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2023 - Present",
  },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Computer Science and System Engineering",
    Company: "Reva University (CGPA-9)",
    Location: "Bangalore",
    Type: "Full Time",
    Duration: "Nov 2020 - May 2024",
  },
  {
    Position: "Pre University",
    Company: `Sri Chaitanya College`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "May 2018 - May 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Weather Application",
    image: projectImage1,
    description: `Developed a full stack weather predicting application using React framework that is interactively designed to give us the weather details of different geographical locations. Worked with external API to get the weather information and used languages like JavaScript, HTML, CSS to build the project.`,
    techstack: "HTML/CSS, JavaScript,Used external API",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Bank Management System",
    image: projectImage2,
    description: `Created a simple bank management system which collects data entered and performs calculations of the particular entries according to the transactions,etc.`,
    techstack: "Python, SQL",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Soil Fertility Prediction",
    image: projectImage3,
    description: `Used machine learning to create a model to analyze and predict soil fertility and also recommend crops according to nutrient levels in given soil data.
    •Developed model using Random forest classifier to predict soil fertility.
    •Decision tree algorithm used to add a crop recommendation feature to the model.
    `,
    techstack: "Python",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Heart Disease Prediction",
    image: projectImage4,
    description: `Created a basic machine learning model which predicts if there is a possibility that the person may have a heart disease of any kind using ML algorithms.`,
    techstack: "Python",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  // {
//     title: "Project title 5",
//     image: projectImage5,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "shreyamalgi@gmail.com",
  phone: "+91 8073519973",
};
