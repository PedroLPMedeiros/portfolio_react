import { Key } from "lucide-react";

const skills = [
    //Front-end
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 80, category: "frontend"},
    {name: "React", level: 90, category: "frontend"},
    {name: "TailWind", level: 80, category: "frontend"},

    //Back-end
    {name: "Node.js", level: 95, category: "backend"},
    // {name: "Express", level: 95, category: "backend"},
    // {name: "MongoDB", level: 95, category: "backend"},
    // {name: "PostreSQL", level: 95, category: "backend"},
    // {name: "GraphQL", level: 95, category: "backend"},

    //Tools
    {name: "Git/GitHub", level: 85, category: "tools"},
    {name: "Figma", level: 80, category: "tools"},
    {name: "VSCode", level: 90, category: "tools"},
];

export const SkillsSection = () =>{

    return (<section id="skills" 
                    className="py-24 px-4 relative bg-secondary"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Minhas <span className="text-primary">Habilidades</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, key) => (
                            <div key={key} className="bg-card p-6 rounded-lg shadows-xs card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level+"%"}}/>
                                </div>

                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </section>
    )};