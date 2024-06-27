import React from 'react';
import { FaChessKnight, FaUtensils, FaFilm, FaSpa, FaHandsHelping } from 'react-icons/fa';
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Interest", link: "#interest" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize dedication and perseverance, committed to achieving excellence in every task.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an e-commerce website",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "NewsDaily-A News App",
      des: "Stay updated with the latest news from around the world with this easy-to-use ReactJS app.",
      img: "/newsdaily.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/aditibajaj11/newsapp",
    },
    {
      id: 2,
      title: "YumCab-A Food Delivery App",
      des: "A fast and reliable food delivery app built with the MERN stack, bringing your favorite meals to your doorstep.",
      img: "/yumcab.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/aditibajaj11/YumCab",
    },
    
  ];
  
  export const skills = [
    {
      name: "React js",
      percentage: "95%",
      image: "/react.svg",
    },
    {
      name: "Next js",
      percentage: "90%",
      image: "/next.svg",
    },
    {
      name: "MongoDB",
      percentage: "85%",
      image: "/mongodb.svg",
    },
    {
      name: "Javascirpt",
      percentage: "90%",
      image: "/js.svg",
    },
    {
      name: "Node.js",
      percentage: "75%",
      image: "/node.svg",
    },
    {
      name: "C++",
      percentage: "70%",
      image: "/cpp.svg",
    },
    {
      name: "Java",
      percentage: "70%",
      image: "/java.svg",
    }
  ];
  
 
export const interest = [
  {
    title: "Chess",
    icon: React.createElement(FaChessKnight),
    description: "I was the district-level chess runner-up during my school years. Chess has always been a strategic passion, helping me sharpen my problem-solving skills.",
  },
  {
    title: "Cooking",
    icon: React.createElement(FaUtensils),
    description: "Cooking is my creative outlet. I love trying out new Instagram recipes and experimenting with different cuisines. It's a delicious way to unwind and explore flavors.",
  },
  {
    title: "Yoga",
    icon: React.createElement(FaSpa),
    description: "I started practicing yoga during the lockdown and it has become a vital part of my routine. Yoga helps me maintain balance and focus in both my personal and professional life.",
  },
  {
    title: "Social Work",
    icon: React.createElement(FaHandsHelping),
    description: "I'm passionate about giving back to the community. In the future, I aim to be more involved in social work and currently support donation campaigns whenever possible.",
  },
];
  
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/aditibajaj11"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/_aditi_bajaj2/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aditi-bajaj-59112323b/"
  },
];