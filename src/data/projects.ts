export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  imageUrl?: string
  award?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "The Game",
    description: "A Flash/Nintendo-style pixel art game developed with a team of 4 during my first year at HVA. Built using a custom game engine, this project helped me master OOP principles including encapsulation, abstraction, inheritance, and polymorphism, as well as web components.",
    technologies: ["TypeScript", "HTML", "CSS", "Game Development", "Web Components"],
    award: "Game of the Year Award - HVA"
  }
]
