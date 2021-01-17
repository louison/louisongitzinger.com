import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const Home = () => (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
                Louison Gitzinger
            </h1>
            <h2 className="prose text-gray-600 mb-16">PhD and enthusiast problem solver, curious and passionate about music, with research and full stack
                experiences.</h2>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                Projects
            </h3>
            <ProjectCard title="Rapsodie"
                         description="Music knowledge management platform enabled by machine learning, to help users navigate French Rap music"
                         href="https://twitter.com/_rapsodie_" icon="/logos/rapsodie.png"/>
        </div>


    </Container>
)

export default Home