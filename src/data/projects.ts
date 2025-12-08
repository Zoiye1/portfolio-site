import gameGif from '../assets/lucastars.gif'
import webshop1 from '../assets/webshop1.png'
import webshop2 from '../assets/webshop2.png'
import webshop3 from '../assets/webshop3.png'
import webshop4 from '../assets/webshop4.png'
import webshop5 from '../assets/webshop5.png'
import webshop6 from '../assets/webshop6.png'


export interface Project {
  id: number
  title: string
  description: string
  languages: string[]
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
    languages: ["TypeScript", "HTML", "CSS"],
    images: [gameGif],
    award: "🏆 Game of the Year Award - HVA"
  },
  {
    id: 2,
    title: "Webshop",
    description: "An e-commerce web application developed with a team of 4 students. Built using HTML, CSS, and TypeScript, this project taught me how to design and implement custom API endpoints, handle RESTful architecture, and manage client-server communication.",
    languages: ["Vue", "Tailwind", "Java", "Typescript"],
    images: [webshop6, webshop1, webshop2, webshop3, webshop4, webshop5],
  }
]
