import Container from "../components/Container";
import Link from 'next/link';
import {NextSeo} from "next-seo";

const Rapsodie = ({}) =>{
    return(
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
            </div>
        </Container>
    )
}
export default Rapsodie;