
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
  
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Version Control",
    icon: mobile,
  },
  {
    title: "Machine Learning and Artificial Intelligence",
    icon: backend,
  },
  {
    title: "Data Analysis",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Calling Service",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Conducted outreach and follow-up calls to executives, effectively communicating project goals and objectives.",
      "Collaborated with cross-functional teams to ensure alignment on project deliverables and requirements.",
      "Facilitated discussions on web development projects, including React.js applications, to gather insights and feedback.",
      "Provided detailed updates and recommendations based on conversations with executives, aiding in decision-making and project planning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Harshit proved me wrong.",
    name: "Aditi Jain",
    designation: "CFO",
    company: "Apna College",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Stock Price Alert",
    description:
      "The Stock Price Alert System is a Python app that tracks a company's stock price and sends an email alert if the price change exceeds a set threshold. It fetches real-time stock data and related news, then emails the stock changes and news updates if the threshold is surpassed",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "request",
        color: "green-text-gradient",
      },
      {
        name: "alpha vantage",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Harxhit/Stock-Price-Alert",
  },
  {
    name: "Rain Alert",
    description:
      "The Rain Alert Messaging App is a Python-based application designed to notify users via SMS if there is a forecast of rain at their specified location. This app leverages weather data from the OpenWeatherMap API and sends alerts using the Twilio SMS service.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "twilio",
        color: "green-text-gradient",
      },
      {
        name: "request",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Harxhit/Rain-alert",
  },
  {
    name: "Black Jack Game",
    description:
      "Developed a Python-based Blackjack game as a personal project to demonstrate proficiency in object-oriented programming and game development principles. Created a text-based game with features including card dealing, player decisions (hit or stand), and dealer AI logic.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Harxhit/BlackJack-Capstone.github.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
