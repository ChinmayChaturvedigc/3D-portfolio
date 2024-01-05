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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "WordPress Developer",
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
    name: "sass",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Agility Visuals",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Led the development of dynamic dashboards, KPI charts, and modules, integrating analytics tools for real-time insights.",
      "Achieved a 70% improvement in optimising the code which enhanced the KPI module.",
      "Conducted rigorous software testing, ensuring bug-free and optimized applications.",
      "Recognized for fostering effective communication, improving collaboration within the team.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Strivio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Spearheaded the enhancement and evolution of Strivio Health Tech's Holistic Wellness Platform, specifically engineering dashboards,landing pages, and various functionalities.",
      "Implemented A/B testing methodologies, resulting in a 15% increase in user engagement and a 10% improvement in click-through rates.",
      "Actively engaged in code reviews, upholding code quality standards, and adhering to best practices.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kangaroo Softwares",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2021 - Dec 2021",
    points: [
      "Translated Figma designs into responsive components, ensuring a seamless interface and increasing page load speed by 20%.",
      "Developed dynamic E-commerce websites, boosting user engagement by 30% through effective API integration and data population.",
      "Collaborated with cross-functional teams, meeting 100% of project deadlines and exceeding performance benchmarks.",
      "Conducted impactful code reviews, improving overall code quality and reducing bug rates by 25%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agility Visual",
    description:
      "Streamline business with cutting-edge software, enhancing agility through intuitive visuals for optimal efficiency and strategic decision-making.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Roaming Route",
    description:
      "Responsive design, easy booking, and dynamic activities. Your ultimate getaway—crafted for adventure, comfort, and connection.",
    tags: [
      {
        name: "NextJ14",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/ChinmayChaturvedigc/NEXT.js-Landing-Page/tree/master",
  },
  {
    name: "Yourfitnesstories",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
