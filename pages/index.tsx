import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import FriendCard from "../components/FriendCard";
import Timeline from "../components/Timeline";
import NewsPost from "../components/News";
import Link from 'next/link';

const Home = () => (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
                Hi, I'm Louison Gitzinger
            </h1>
            <h2 className="prose text-gray-600 mb-8">
                Enthusiast problem solver, curious and passionate about
                music, with research and full stack experiences.
            </h2>

            <Link
                href="mailto:gitzingerlouison@gmail.com"
            >
                <a target="_blank"
                   className="self-center hidden"
                   rel="noopener noreferrer">
                    <button
                        className="flex self-center items-center justify-center px-2 font-bold h-8 bg-green-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                        type="submit"
                    >
                        Hire me
                    </button>
                </a>

            </Link>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                News
            </h3>
            <NewsPost title={"Stepping into a new melody with Rapsodie!"} summary={
                "I have embarked on an exciting new journey with Rapsodie, the first-of-its-kind fantasy label game! As the Co-founder and CTO, I am diving into a world where technology and music blend seamlessly, creating a platform where players transform into virtual label managers. Our mission is to redefine the music and gaming landscape, offering a unique playground for discovering up-and-coming artists while building legendary music empires. We are not just creating a game; we are shaping a decentralized talent scouting platform that is as innovative as it is engaging."
            } href={"https://artists.spotify.com/blog/innovating-for-writers-and-artists"}/>
            <NewsPost title={"Joining the band @Spotify CTRL team in Paris!"} summary={
                "What a head start and a great opportunity to mix my passions to help artists in their creation process!"
            } href={"https://artists.spotify.com/blog/innovating-for-writers-and-artists"}/>
            <NewsPost title={"Just graduated with my PhD in Computer Science !"} summary={
                "After three years of hard work, I finally did it: I defended my PhD thesis entitled \"Surviving the massive proliferation of mobile malware\" on December 8, 2020"
            } href={"/phd"}/>

            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                Projects
            </h3>
            <ProjectCard title="Rapsodie"
                         description="Rapsodie is an immersive fantasy label game where players step into the shoes of virtual label managers, discovering up-and-coming artists and building their own music empires. It's a unique blend of music discovery and strategic gameplay, offering a dynamic platform to explore, engage, and rise in the music industry."
                         href="https://rapsodie.co/"
                         icon="/logos/rapsodie.png"/>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                Friends
            </h3>
            <div className="flex flex-col w-full">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
                    <FriendCard title="Brio"
                                description="An inclusive dictionnary of teenagehood."
                                href="https://www.instagram.com/brio.ados"
                                icon="/logos/brio.png"/>
                    <FriendCard title="deuxfleurs.fr"
                                description="deuxfleurs.fr is a non-profit that build its own part of the internet to rethink how we participate in it."
                                href="https://deuxfleurs.fr/"
                                icon="/logos/deuxfleurs.svg"/>
                </div>
            </div>
            <Timeline/>
            {/*<h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">*/}
            {/*    Top Tracks*/}
            {/*</h2>*/}
            {/*<p className="text-gray-600 dark:text-gray-400 mb-4">*/}
            {/*    Curious what I'm currently jamming to? Here's my top tracks on Spotify*/}
            {/*    updated daily.*/}
            {/*</p>*/}
            {/*<TopTracks />*/}

        </div>
    </Container>
)

export default Home
