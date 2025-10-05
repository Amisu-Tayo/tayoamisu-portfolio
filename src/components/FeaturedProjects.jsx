// src/components/FeaturedProjects.jsx
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    id: 'ranking-with-purpose',
    title: 'Ranking with Purpose',
    blurb:
      'An exploratory analytics project comparing institutional performance through transparent, multi-metric ranking models.',
    tags: ['Analytics','Visualization','Python','Pandas','ML'],
    img: '/src/assets/ranking-with-purpose.png',
    links: { 
      live: 'https://ranking-with-purpose.streamlit.app/',
       repo: 'https://github.com/Amisu-Tayo/Ranking-With-Purpose', 
       Notebook: 'https://colab.research.google.com/drive/1Vt7WERYK2YiNrD0Y3OTDcD5PZqkjFYUN?authuser=1#scrollTo=yAXN8qAfQMZZ' }
  },
  {
    id: 'fims',
    title: 'Fabric Inventory Forecasting System',
    blurb:
      'A lightweight planning tool for small retailers that turns sales data into simple forecasts.',
    tags: ['Python','Flask','AWS', 'Forecasting','MySQL'],
    img: '/src/assets/FIMS.png',
    links: { 
      live: 'https://fims.store/', 
      repo: 'https://github.com/Amisu-Tayo/SWE-CodeCrafters' 
       }
  },
  
  {
    id: 'maze-pathfinding',
    title: 'Maze Pathfinding',
    blurb:
      'A visual exploration of pathfinding algorithms, demonstrating how heuristics like A* discover efficient routes through dynamic environments.',
    tags: ['Algorithms','Heuristics','Pathfinding'],
    img: '/assets/maze-pathfinding.png',
    links: { 
      repo: 'https://github.com/Amisu-Tayo/maze-pathfinder',
      Overview: '#' 
    }
  },
  {
    id: 'malloy',
    title: 'Malloy (malloc-like allocator)',
    blurb:
      'A lightweight malloc-style memory allocator with a pooled memory model, free-list management, fragmentation tests, and mmap-based expansion.',
    tags: ['C','OperatingSystems','mmap','Allocator'],
    img: '/src/assets/malloy.png',
    links: { 
      repo: 'https://github.com/Amisu-Tayo/Custom-Memory-Allocator-Malloy-', 
      Overview: '#' }
  },
   {
    id: 'Wumpus-World',
    title: 'Wumpus World Intelligent Agent',
    blurb:
      'An intelligent agent for Wumpus World that combines rule-based reasoning, probability, and search algorithms to safely retrieve gold and escape the cave.',
    tags: ['AI','logic','Search'],
    img: '/src/assets/wumpus-world.png',
    links: { 
      repo: 'https://github.com/Amisu-Tayo/Wumpus-World-Agent',
      Oveerview: '#' 
    }
  },
  {
    id: 'lyrical-intelligence',
    title: 'Lyrical Intelligence (work in progress)',
    blurb:
      'An NLP study of song lyrics using transformer embeddings to classify emotional tone, genre, and artist style. Explores linguistic features and representation learning through models like BERT and stylometric analysis.',
    tags: ['NLP','Transformers','BERT','Stylometry','Classification','WIP'],
    img: '/src/assets/lyrical-intelligence.png',
    links: { 
      notebook: '#', 
      repo: '#',
      Overview: '#' 
    
    }
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section py-10 md:py-16">
      <div className="eyebrow">Projects</div>
      <h2 className="h2 mt-1">Selected Work</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-prose">
        Projects spanning data, AI, and systems that I've built for learning and exploration.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {PROJECTS.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}
