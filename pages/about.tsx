import Container from "../components/Container";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NextSeo} from "next-seo";
import {IconName} from "@fortawesome/fontawesome-svg-core";

type Link = {
    iconName: IconName,
    link: string
}

const links: Link[] = [
    {
        iconName: 'twitter',
        link: 'https://twitter.com/lgitzing'
    },
    {
        iconName: 'github',
        link: 'https://github.com/louison'
    },
    {
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/louison-gitzinger-6a7181b1/'
    },
    {
        iconName: 'spotify',
        link: 'https://open.spotify.com/user/loulouxd'
    },
]

const About = ({}) => {
    return (
        <Container>
            <NextSeo
                title="About Me – Louison Gitzinger"
                canonical="https://louisongitzinger.com/about"
                openGraph={{
                    url: 'https://louisongitzinger.com/about',
                    title: 'About Me – Louison Gitzinger'
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    About Me
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Hey, I’m Louison. I recently graduated with my{" "}
                        <a href="/phd">PhD</a>
                        {" "}in Computer Science from the University of Rennes 1.
                        I'm currently starting my career in Software Engineering in Paris, France.
                        {/*My PhD, entitled "Surviving the massive proliferation of mobile malware" has*/}
                        {/*I'm a cybersecurity expert*/}
                    </p>
                    <p>
                        During my PhD, entitled "Surviving the massive proliferation of mobile malware", I focused on
                        finding solutions to
                        globally improve malware detection in the Android ecosystem.
                    </p>
                    <p>
                        I grew up in{' '}
                        <a
                            href="https://fr.wikipedia.org/wiki/Nancy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Nancy
                        </a>{' '}
                        , a small-town in the East of France (Lorraine).
                        I first studied at Université de Lorraine, where I graduated with a bachelor's degree in
                        Engineering Science.
                        In 2014, I moved in{' '}
                        <a
                            href="https://fr.wikipedia.org/wiki/Rennes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rennes
                        </a>{' '}
                        to study Computer Science at Université de Rennes 1 where I graduated with a Master's degree in 2017.
                        The same year, I specialized in cybersecurity by starting a PhD entitled "Surviving the massive
                        proliferation of mobile malware".
                        In December 2020, I graduated with my PhD and moved to Paris.
                        I spend my free time hacking around on <a href="/rapsodie">side projects</a>, playing music, and
                        enjoying time with friends and family.
                    </p>
                </div>
                <div className="flex w-full justify-center mt-5">
                    {links.map((rs,i)=>(
                        <a key={i} href={rs.link} target="_blank" className="px-3">
                            <FontAwesomeIcon icon={["fab",rs.iconName]} size="2x"/>
                        </a>
                    ))}
                </div>
            </div>
        </Container>
    )
}
export default About;