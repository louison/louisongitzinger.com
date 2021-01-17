import Container from "../components/Container";
import {NextSeo} from "next-seo";
import Publication from "../components/Publication";



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
                        to study Computer Science at Université de Rennes 1 where I graduated with a Master's degree in Computer Science in 2017.
                        The same year, I specialized in cybersecurity by starting a PhD entitled "Surviving the massive
                        proliferation of mobile malware".
                        In December 2020, I graduated with my PhD and moved to Paris to start my career in Software
                        Engineering.
                        I spend my free time hacking around on <a href="/rapsodie">side projects</a>, playing music, and
                        enjoying time with friends and family.
                    </p>
                </div>
                <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
                    Publications
                </h2>
                <Publication
                    title="DroidAutoML: A Microservice Architecture to Automate the Evaluation of Android Machine Learning Detection Systems"
                    link="https://link.springer.com/chapter/10.1007%2F978-3-030-50323-9_10"
                >
                    The mobile ecosystem is witnessing an unprecedented increase in the number of malware in the wild.
                    To fight this threat, actors from both research and industry are constantly innovating to bring
                    concrete solutions to improve security and malware protection.
                    Traditional solutions such as signature-based anti viruses have shown their limits in front of
                    massive proliferation of new malware, which are most often only variants specifically designed to
                    bypass signature-based detection.
                    Accordingly, it paves the way to the emergence of new approaches based on Machine Learning (ML)
                    technics to boost the detection of unknown malware variants.
                    Unfortunately, these solutions are most often underexploited due to the time and resource costs
                    required to adequately fine tune machine learning algorithms.
                    In reality, in the Android community, state-of-the-art studies do not focus on model training, and
                    most often go through an empirical study with a manual process to choose the learning strategy,
                    and/or use default values as parameters to configure ML algorithms.
                    However, in the ML domain, it is well known admitted that to solve efficiently a ML problem, the
                    tunability of hyper-parameters is of the utmost importance.
                    Nevertheless, as soon as the targeted ML problem involves a massive amount of data, there is a
                    strong tension between feasibility of exploring all combinations and accuracy.
                    This tension imposes to automate the search for optimal hyper-parameters applied to ML algorithms,
                    that is not anymore possible to achieve manually.
                    To this end, we propose a generic and scalable solution to automatically both configure and evaluate
                    ML algorithms to efficiently detect Android malware detection systems.
                    Our approach is based on devOps principles and a microservice architecture deployed over a set of
                    nodes to scale and exhaustively test a large number of ML algorithms and hyper-parameters
                    combinations.
                    With our approach, we are able to systematically find the best fit to increase up to 11% the
                    accuracy of two state-of-the-art Android malware detection systems.
                </Publication>
            </div>
        </Container>
    )
}
export default About;