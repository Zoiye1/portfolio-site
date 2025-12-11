import gameGif from '../assets/lucastars.gif'
import webshop1 from '../assets/webshop1.png'
import webshop2 from '../assets/webshop2.png'
import webshop3 from '../assets/webshop3.png'
import webshop4 from '../assets/webshop4.png'
import webshop5 from '../assets/webshop5.png'
import webshop6 from '../assets/webshop6.png'
import elections1 from '../assets/Elections1.png'
import elections2 from '../assets/Elections2.png'
import elections3 from '../assets/Elections3.png'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import game4 from '../assets/game4.png'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  images?: string[]
  award?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "The Game",
    description: "A Flash/Nintendo-style pixel art game developed with a team of 4 during my first year at HVA. Built using a custom game engine, this project helped me master OOP principles including encapsulation, abstraction, inheritance, and polymorphism, as well as web components.",
    technologies: ["Typescript", "HTML", "CSS"],
    images: [gameGif, game1, game2, game3, game4],
    award: "🏆 Game of the Year Award - HVA",
    githubUrl: "https://github.com/Zoiye1/Lucastars-Game",
    demoUrl: "https://lucastars-game-web.vercel.app/"
  },
  {
    id: 2,
    title: "Webshop",
    description: "An e-commerce web application developed with a team of 4 students. Built using HTML, CSS, and TypeScript, this project taught me how to design and implement custom API endpoints, handle RESTful architecture, and manage client-server communication.",
    technologies: ["Typescript", "HTML", "CSS"],
    images: [webshop6, webshop1, webshop2, webshop3, webshop4, webshop5],
    githubUrl: "https://github.com/Zoiye1/Lucastars-Webshop",
    demoUrl: "https://lucastars-game-web.onrender.com/"
  },
  {
    id: 3,
    title: "Election Website",
    description: "An election data visualization platform developed with a team of 4 students. Built by parsing official Rijksoverheid XML datasets and presenting them through a Vue/Tailwind/TypeScript frontend with a Java backend, this project helped me master data parsing and analysis, RESTful API architecture, layered software design following MVC principles, and the integration of complex datasets into user-friendly web applications.",
    technologies: ["Vue", "Tailwind", "Java", "Typescript", "Hibernate/JPA"],
    images: [elections1, elections2, elections3],
  }
]
