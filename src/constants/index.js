import a3nab from "../assets/projects/a3nab.jpg";
import hakeem from '../assets/projects/Hakeem.png';
import verizon from "../assets/projects/verizon.webp";

export const HERO_CONTENT = `I am a Backend Developer with 4 years of experience specializing in Node.js, 
                            Express.js, and MySQL. I have worked on complex projects in healthcare, e-commerce, 
                            and telecommunications, creating scalable and efficient backend solutions. 
                            I am passionate about building systems that solve real-world problems 
                            and thrive in collaborative environments`;

export const ABOUT_TEXT = `I am a highly skillfull Backend developer 
                             I specialize in building robust and scalable APIs using Node.js and Express.js
                             I’ve contributed to major projects for Verizon Telecommunication sector, e-commerce and Booking platforms.
                             My expertise extends to database management with MySQL and Oracle SQL, 
                             and I’ve played a key role in streamlining code release processes using Jenkins pipeline. 
                             Although my primary expertise is in backend development, I’ve also built several live web 
                             applications using React and Tailwind CSS. While I didn’t work as a frontend or 
                             full stack developer in my past roles, I am comfortable working with React and can 
                             effectively collaborate on frontend tasks.I’m passionate about solving complex problems 
                             and I am actively seeking opportunities.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Asociate business analyst",
    company: "Infosys",
    description: `Involved in the development and maintenance of large-scale applications, handling real-time data, API integrations, and database management.`,
    technologies: ["NodeJs", "Express.js", "Javascript", "Oracle", "React.js", "Git", "Jira"],
  },
  {
    year: "2020 - 2022",
    role: "Backend Developer",
    company: "Lia infraservices",
    description: `Worked as a Backend Developer, primarily responsible for developing and maintaining APIs and ensuring the scalability and efficiency of backend systems`,
    technologies: ["NodeJs", "Express.js", "MySql", "Git", "AngulaJs", "Angular"],
  },
];

export const PROJECTS = [
  {
    title: "Booking Application Mobile and web",
    image: hakeem,
    description: "Developed a healthcare platform that connects patients and doctors for virtual consultations and appointment bookings. It includes mobile apps for patients and doctors, and web applications for hospital admins and platform admins",
    responsibilties: "Developed RESTful APIs for both mobile and web applications using Node.js, Express.js, and MySQL, Integrated real-time features for doctor availability, appointment bookings, and location tracking",
    technologies: ["NodeJs", "Express.js", "MySql", "Git", "AngulaJs"],
  },
  {
    title: "E-Commerce Application Mobile and web",
    image: a3nab,
    description: "Built an e-commerce platform for groceries and household items, including mobile apps for users, store owners, and delivery drivers, and an admin panel for management",
    responsibilties: "Developed RESTful APIs for both mobile and web applications using Node.js, Express.js, and MySQL, Integrated real-time features for doctor availability, appointment bookings, and location tracking, Managed key platform functionalities such as product management, order processing, and delivery tracking.",
    technologies: ["NodeJs", "Express.js", "MySql", "Git", "Angular"],
  },
  {
    title: "Verizon telecommunication sector's Web application",
    image: verizon,
    description: "Contributed to Verizon's IOP web application, providing system engineers with a centralized dashboard to manage sites, tasks, and operations",
    responsibilties: "Developed and enhanced features using a microservices architecture with Node.js, Express.js, and Oracle SQL. Built and tested APIs, resolved production issues, and managed code releases via Jira and Jenkins. Coordinated with over 30 services, ensuring smooth integration across the system",
    technologies: ["NodeJs", "Express.js", "Oracle", "Mongo", "Git", "React", "Jira", "Jenkins"],
  },

];

export const CONTACT = {
  address: "No 2, ponniamman kovil street, sholinganallur, chennai 600019",
  phoneNo: "+91 6383159335",
  email: "devendra.pmu@gmail.com",
};
