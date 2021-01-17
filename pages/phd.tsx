import Container from "../components/Container";
import {NextSeo} from "next-seo";
import Publication from "../components/Publication";

const PhD = () => {
    return (
        <Container>
            <NextSeo
                title="PhD – Louison Gitzinger"
                canonical="https://louisongitzinger.com/phd"
                openGraph={{
                    url: 'https://louisongitzinger.com/phd',
                    title: 'PhD – Louison Gitzinger'
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    PhD
                </h1>
                <h2 className="prose text-gray-900 mb-16">Surviving the massive proliferation of mobile malware</h2>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        From 2017 to 2020, I dedicated my life to this PhD in Computer Science at Université de Rennes 1.
                        I was part of the{' '}
                        <a
                            href="https://team.inria.fr/wide/presentation/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WIDE
                            </a>{' '}team, a joint research team focusing on large-scale distributed computer systems.
                        <br/>
                        It was a rewarding experience that allowed me to acquire strong research and full-stack
                        experiences in Software Engineering.
                        This page provides a summary of my thesis as well as relevant resources.
                        You can download my thesis manuscript{' '} <a
                        href="/resources/louison_gitzinger_thesis_manuscript.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                        .
                    </p>
                </div>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                    Abstract
                </h3>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Nowadays, many of us are surrounded by smart devices that seamlessly operate interactively and
                        autonomously together with multiple services to make our lives more confortable. These smart
                        devices are part of larger ecosystems, in which various companies collaborate to ease the
                        distribution of applications between developers and users. However malicious attackers take
                        advantage of them illegitimately to infect users’ smart devices with malicious applications.
                        Despite all the efforts made to defend these ecosystems, the rate of devices infected with
                        malware is still increasing in 2020. In this thesis, we explore three research axes with the aim
                        of globally improving malware detection in the Android ecosystem. We demonstrate that the
                        accuracy of machine learning-based detection systems can be improved by automating their
                        evaluation and by reusing the concept of AutoML to fine-tune learning algorithms parameters. We
                        propose an approach to automatically create malware variants from combinations of complex
                        evasion techniques to diversify experimental malware datasets in order to challenge existing
                        detection systems. Finally, we propose methods to globally increase the quality of experimental
                        datasets used to train and test detection systems.
                    </p>
                </div>
                <a
                    className="mb-4 hover:shadow self-center"
                    href="/resources/louison_gitzinger_thesis_manuscript.pdf"
                    // onClick={() => trackGoal(title)}
                    aria-label="Surviving the massive proliferation of mobile malware"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                        <div className="h-8 w-8 ml-2 mr-4">
                            <span className="sr-only">Surviving the massive proliferation of mobile malware</span>
                            <div
                                className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                            >
                                <img
                                    src="/logos/pdf-file.svg"
                                    width="100%"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                Surviving the massive proliferation of mobile malware
                            </h4>
                            <p className="leading-5 text-gray-700 dark:text-gray-300">
                                Link to a pdf of my thesis manuscript
                            </p>
                        </div>
                    </div>
                </a>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                    Publications
                </h3>
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
export default PhD