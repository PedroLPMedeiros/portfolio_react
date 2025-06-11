import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { MySection } from "../components/MySection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          
            <ThemeToggle/>

            <StarBackground/>

            <Navbar/>

            {/* Main Content */}
            <main>
                <MySection/>
                <AboutMe/>
                <SkillsSection/>
                <ProjectsSection/>
            </main>

            {/* Footer */}
        </div>)
    
}