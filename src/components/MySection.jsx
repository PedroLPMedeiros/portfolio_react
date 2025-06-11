import { ArrowDown } from "lucide-react"

export const MySection = () => {
    return <section id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl max-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in duration-1000">Olá, eu sou o </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Pedro!</span>
                </h1>

                <p 
                className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2"
                >
                    Meu objetivo é criar sites de qualidade que possam proporcionar experiências incríveis ao usuário. Me especializo no desenvolvimento front-end e construo interfaces que são modernas, bonitas e funcionais.
                </p>

                <div>
                    <a href="#projects" 
                    className="cosmic-button opacity-0 animate-fade-in-delay-3">
                        Olha só o meu trabalho &#10024;
                    </a>
                </div>
            </div>
        </div>

        <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>

    </section>
}