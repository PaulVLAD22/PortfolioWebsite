export const projectOne = {
  id: 1,
  lightBg: false,
  lightText: true,
  topLine: "E-Commerce Website",
  frontEnd: "React, Boostrap",
  backEnd: "Jquery/PHP/MySQL",
  description:
    "Responsive e-commerce website project created from scratch in order for me to practice React basics, PHP and MySQL.  User accounts can add products to cart, comment on products, rate them and, after entering your details, order them. Admin accounts can add products or remove them.",
  img: [
    require("../../images/projectOne/img-1.png").default,
    require("../../images/projectOne/img-2.png").default,
    require("../../images/projectOne/img-3.png").default,
    require("../../images/projectOne/img-4.png").default,
    require("../../images/projectOne/img-5.png").default,
    require("../../images/projectOne/img-6.png").default,
    require("../../images/projectOne/img-7.png").default,
    require("../../images/projectOne/img-8.png").default,
  ],
  imgLinks: [
    "https://i.imgur.com/vAhk7XZ.png",
    "https://i.imgur.com/PqguZki.png",
    "https://i.imgur.com/5nzkGxQ.png",
    "https://i.imgur.com/hXOb87L.png",
    "https://i.imgur.com/e5xemxR.png",
    "https://i.imgur.com/crM90GU.png",
    "https://i.imgur.com/xqSb2bC.png",
    "https://i.imgur.com/LUYlgcQ.png",
  ],
  alt: "E-Commerce Website",
  githubLink: "//www.github.com/PaulVLAD22/e-commerce-Website"
};

export const projectTwo={
  id: 3,
  lightBg: true,
  lightText: false,
  topLine: "Tripsaver Website",
  frontEnd: "React.js/Typescript/ChakraUI",
  backEnd: "Axios",
  description:
    "Frontend for a website on which you have different locations associated to your account and by clicking on the map you can add more places you want to visit or remove the ones you have already been to.",
  img: [
    "https://i.imgur.com/dCJL85i.png",
    "https://i.imgur.com/fs68xNG.png",
    "https://i.imgur.com/KWj4gWa.png"

  ],
  imgLinks: [
    "https://i.imgur.com/dCJL85i.png",
    "https://i.imgur.com/fs68xNG.png",
    "https://i.imgur.com/KWj4gWa.png"
  ],
  alt: "Tripsaver Website",
  githubLink: "https://github.com/PaulVLAD22/TripSaver-Website/tree/main/tripsaver"
};

export const projectThree = {
  id: 3,
  lightBg: true,
  lightText: false,
  topLine: "To-do Tasks Website",
  frontEnd: "HTML/CSS/JS",
  backEnd: "PHP/MySQL",
  description:
    "Responsive to-do list type website. Each account has 3 sections: active tasks, private tasks and completed tasks. By providing a user's username (peeking) you can't see his private tasks but you can see his active and completed ones.",
  img: [
    require("../../images/projectTwo/img-1.png").default,
    require("../../images/projectTwo/img-2.png").default,
  ],
  imgLinks: [
    "https://i.imgur.com/fRBIKrf.png",
    "https://i.imgur.com/vaFsQnH.png",
  ],
  alt: "To-do Tasks Website",
  githubLink: "//www.github.com/PaulVLAD22/TechToDo---Website"
};
export const projectFour = {
  id:4,
  lightBg:false,
  lightText:true,
  topLine:"Coronavirus Tracker",
  frontEnd: "Boostrap",
  backEnd:"Java Spring",
  description:"Java (Spring) Web app that displays today's number of coronavirus cases getting data from a Github repository csv file. The purpose of this project was for me to try out java libraries, having only worked with vanilla java beforehand.",
  img: [
    require("../../images/projectFour/img-1.png").default
  ],
  imgLinks:[
    "https://i.imgur.com/vpUtM7x.png"
  ],
  alt:"Coronavirus Tracker Website",
  githubLink: "https://github.com/PaulVLAD22/Spring-CoronavirusTracker"
}

export const projects = [projectOne,projectTwo,projectFour,projectThree]
