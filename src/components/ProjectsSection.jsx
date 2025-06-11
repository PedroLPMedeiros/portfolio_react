import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Movie Search",
        description: "Um site de pesquisa de filmes que utiliza React e Tailwind",
        image: "/projects/moviesearch.png",
        tags: ["React", "TailwindCSS"],
        githubURL: "https://github.com/PedroLPMedeiros/movie-search.git"
    },
    {
        id: 2,
        title: "Portfolio",
        description: "Um site de portfolio pessoal utiliando React e Tailwind",
        image: "/projects/portfolio.png",
        tags: ["React", "TailwindCSS"],
        githubURL: "https://github.com/PedroLPMedeiros/portfolio_react"
    },
    {
        id: 3,
        title: "Site de viagens",
        description: "Um site simples de viagens utilizando HTML e CSS",
        image: "/projects/viagens.png",
        tags: ["HTML", "BootStrapCSS"],
        githubURL: "https://github.com/PedroLPMedeiros/Projeto_site_de_viagens"
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Meus <span className="text-primary">Projetos</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Esses são alguns dos meus projetos de front-end, desde os iniciais até os mais recentes. Todos foram planejados com muito cuidado e atenção, permitindo uma ótima experiência ao usuário.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key)=> (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tags.map((tag) => (
                                    <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/20  text-secondary-foregound">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                href="https://github.com/PedroLPMedeiros"
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Confira o meu GitHub <ArrowRight 
                    size={16}
                />
                </a>
            </div>
        </div>
    </section>
}