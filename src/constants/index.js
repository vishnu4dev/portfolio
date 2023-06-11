import {
  mobile,
  backend,
  // creator,
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
  // figma,
  // docker,
  // meta,
  ey,
  ps,
  cargill,
  eyOpsChain,
  hsource,
  // threejs,
  mui
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
    title: "Front-End Web Development",
    icon: web,
  },
  {
    title: "MERN Stack Web Development",
    icon: mobile,
  },
  {
    title: "Basic Blockchain Development",
    icon: backend,
  }
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Ernest & Young",
    icon: ey,
    iconBg: "black",
    date: "March 2018 - March 2021",
    points: [
      "Developing and maintaining responsive design web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Develop and deliver end-to-end feature functionality in MERN stack applications following Agile methodology ",
      "Played key role in delivering EY OpsChain, EY Abacus Lotte Blockchain Wallet, EY InterCompany, HSources and etc.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Publicis Sapient",
    icon: ps,
    iconBg: "#E6DEDD",
    date: "March 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
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
    name: "Cargill",
    description:
      "Web-based platform that provides users to buy and sell commodities so as to connect farmers with markets, customers. Cargill platform also allows users process and trade in livestock feed sector as well. Application also provide modules to track invoices, shippings, prices update, customer support forums, and lot more",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-testing-library",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: cargill,
    // https://www.mycargill.com/home/en/pages/welcome
    source_code_link: "",
  },
  {
    name: "EY Ops Chain",
    description:
      "EY Ops Chain is a full-featured business application that allows enterprises to digitize and automate their interactions with key business partners, from procurement to financial settlements. We now have clients across a range of industries from automotive, to food and beverage, to health care that are all using the same scalable code base and open blockchain standards. EY OpsChain confirms that shared processes and facts are synchronized across networks of organizations by modeling existing business processes with tokens and smart contracts on a blockchain",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: eyOpsChain,
    source_code_link: "",
  },
  {
    name: "H-Source",
    description:
      "A comprehensive way to buy, sell, and transfer things in Healthcare and Supply-Chain Solutions. Honoured to be part of this initiative in its early phase of application development",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: hsource,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };