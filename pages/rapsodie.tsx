import Container from "../components/Container";
import {NextSeo} from "next-seo";

const Rapsodie = ({}) => {
    return (
        <Container>
            <NextSeo
                title="Rapsodie – Louison Gitzinger"
                canonical="https://louisongitzinger.com/rapsodie"
                openGraph={{
                    url: 'https://louisongitzinger.com/rapsodie',
                    title: 'Rapsodie – Louison Gitzinger'
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Rapsodie
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        I still need to write stuff here, but you can already take a look at what Rapsodie on{' '} <a
                        href="https://twitter.com/_rapsodie_"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>{' '} and
                        {' '} <a
                        href="https://instagram.com/_rapsodie_"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>.
                    </p>
                </div>
            </div>
        </Container>
    )
}
export default Rapsodie;