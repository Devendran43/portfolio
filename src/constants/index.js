import a3nab from "../assets/projects/a3nab.jpg";
import hakeem from '../assets/projects/Hakeem.png';
import verizon from "../assets/projects/verizon.webp";

export const HERO_CONTENT = `Welcome to my portfolio! I am a Fullstack Developer with four years of experience specializing in Node.js, Express.js, React, Oracle, and MySQL. Throughout my career, I have had the opportunity to work on complex projects in the healthcare, e-commerce, and telecommunications sectors. I am passionate about creating innovative solutions and am excited to contribute my skills to new challenges.`;

export const ABOUT_TEXT = `I specialize in building robust and scalable APIs using Node.js and Express.js, having contributed to significant projects in the telecommunications sector with Verizon, as well as in e-commerce and booking platforms. My expertise extends to database management with MySQL and Oracle SQL, and I have developed user interfaces using React and Tailwind for various projects, including portfolios, e-commerce sites, and 3D applications. Additionally, I have played a key role in streamlining code release processes using Jenkins pipelines. I am passionate about solving complex problems and am actively seeking new opportunities to apply my skills.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Associate Business Analyst",
    company: "Infosys",
    description: `I am involved in the development and maintenance of large-scale applications, focusing on handling real-time data, API integrations, and database management.`,
    technologies: ["Node.js", "Express.js", "JavaScript", "Oracle", "React.js", "Git", "Jira"],
  },
  {
    year: "2020 - 2022",
    role: "Backend Developer",
    company: "Lia Infraservices",
    description: `As a Backend Developer, I was primarily responsible for developing and maintaining APIs while ensuring the scalability and efficiency of backend systems.`,
    technologies: ["Node.js", "Express.js", "MySQL", "Git", "AngularJS", "Angular"],
  },

];

export const PROJECTS = [
  {
    title: "Booking Application (Mobile and Web)",
    image: hakeem,
    description: "Developed a healthcare platform that connects patients with doctors for virtual consultations and appointment bookings. It includes mobile applications for patients and doctors, as well as web applications for hospital administrators and owners.",
    responsibilities: "Developed RESTful APIs for both mobile and web applications using Node.js, Express.js, and MySQL. Integrated real-time features for doctor availability, video calls, appointment bookings, patient history management, and location tracking.",
    technologies: ["Node.js", "Express.js", "MySQL", "Git", "AngularJS"],
  },
  {
    title: "E-Commerce Application (Mobile and Web)",
    image: a3nab,
    description: "Built an e-commerce platform for groceries and household items, featuring mobile applications for users, store owners, and delivery drivers, along with an admin panel for management.",
    responsibilities: "Developed RESTful APIs for both mobile and web applications using Node.js, Express.js, and MySQL. Enabled seamless product management, store management, order processing, and delivery tracking across the platform.",
    technologies: ["Node.js", "Express.js", "MySQL", "Git", "Angular"],
  },
  {
    title: "Web Application for Verizon's Telecommunications Sector",
    image: verizon,
    description: "Contributed to Verizon's Integrated Operations Portal (IOP) web application, providing system engineers with a centralized dashboard to manage sites, tasks, and operations.",
    responsibilities: "Developed and enhanced features using a microservices architecture with Node.js, Express.js, and Oracle SQL. Built and tested APIs, resolved production issues, and managed code releases via Jira and Jenkins. Coordinated with over 30 services, ensuring smooth integration across the system.",
    technologies: ["Node.js", "Express.js", "Oracle", "MongoDB", "Git", "React", "Jira", "Jenkins"],
  },

];

export const CONTACT = {
  address: "No 2, ponniyamman kovil street, sholinganallur, chennai 600019",
  phoneNo: "+91 6383159335",
  email: "devendra.pmu@gmail.com",
};
