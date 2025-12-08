import gameGif from '../assets/lucastars.gif'
import block4 from '../assets/blok4.png'


export interface Project {
  id: number
  title: string
  description: string
  languages: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  award?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "The Game",
    description: "A Flash/Nintendo-style pixel art game developed with a team of 4 during my first year at HVA. Built using a custom game engine, this project helped me master OOP principles including encapsulation, abstraction, inheritance, and polymorphism, as well as web components.",
    languages: ["TypeScript", "HTML", "CSS"],
    imageUrl: gameGif,
    award: "🏆 Game of the Year Award - HVA"
  },
  {
    id: 2,
    title: "Webshop",
    description: "",
    languages: ["Vue", "Tailwind", "Java", "Typescript"],
    imageUrl: block4,
  }
]
