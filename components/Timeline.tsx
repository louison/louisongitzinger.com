import {ReactNode, useState} from 'react';

const Divider = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-600 w-full my-8"/>
    );
};

type YearProps = {
    children: ReactNode
}

const Year = ({children}: YearProps) => {
    return (
        <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            {children}
        </h3>
    );
};

type StepProps = {
    title: string
    children?: ReactNode
}

const Step = ({title, children}: StepProps) => {
    return (
        <li className="mb-4 ml-2">
            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <span className="sr-only">Check</span>
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                    </g>
                </svg>
                <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
        </li>
    );
};

const FullTimeline = () => (
    <>
        <Divider/>
        <Year>2018</Year>
        <ul>
            <Step title="First academic courses as a teacher">
                <p>I taught two classes of student in Master of Engineering the basics of Cloud computing and Mobile security.</p>
            </Step>
            <Step title="Founded Rapsodie with Rashad">
                <p>After iterating for a while, we finally decided to launch Rapsodie : our non-profit organization that create social awareness around french rap.</p>
            </Step>
            <Step title="Attended my first international conference - Middleware 2018">
            </Step>
        </ul>
        <Divider/>
        <Year>2017</Year>
        <ul>
            <Step title="Started a PhD in Computer Science">
                <p>After a 6 months internship in a research lab, I decided to deep-dive into the academic world.</p>
            </Step>
            <Step title="Graduated with a Master's degree in Computer Science at Université de Rennes 1">
            </Step>
        </ul>
        <Divider/>
        <Year>2016</Year>
        <ul>
            <Step title="Software Engineer Intern at Nokia Tech - Withings">
                <p>
                    <ul>
                        <li>
                            Designed and developed back-office tools for the analysis of hardware production chain data.
                        </li>
                        <li>
                            Automated retrieval and display of 50k data points/day which reduced time spent to detect issues by 50%.
                        </li>
                        <li>
                            Improved tools speed to analyze past production data by 10x.
                        </li>
                    </ul>
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>2015</Year>
        <ul>
            <Step title="Software Engineer Intern at Rexel France">
                <p>
                    Developed a remote diagnostics solution for home IoT devices for the support team: initiated the project, developed a long term viable solution, negotiated with stakeholders, and developed a web based version of the tool.
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>2014</Year>
        <ul>
            <Step title="Graduated with a Bachelor's degree in Engineering Science">
                <p>
                    Studied general topics such as electronics, algorithms, networks, embedded systems, mathematics, thermodynamics, fluid mechanics.
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>2012</Year>
        <ul>
            <Step title="Reached the Diamond league for the first time on StarCraft II">
                <p>
                    After trying hard for 2 years 👾
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>2014</Year>
        <ul>
            <Step title="Graduated with a Bachelor's degree in Engineering Science">
                <p>
                    Studied general topics such as electronics, algorithms, networks, embedded systems, mathematics, thermodynamics, fluid mechanics.
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>2011</Year>
        <ul>
            <Step title="Graduated High School">
                <p>
                    Obtained the french Baccalauréat.
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>1997</Year>
        <ul>
            <Step title="First memories with a computer">
                <p className="prose">

                    I remember afternoons playing{' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Zoombinis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zombinis
                    </a>{' '}
                    and various
                    {' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Humongous_Entertainment"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Humongous games
                    </a>{' '} (Putt-Putt, Freddi Fish, ...)
                    with my sister.
                </p>
            </Step>
        </ul>
        <Divider/>
        <Year>1993</Year>
        <ul>
            <Step title={`Born  👶🏼🍼  in Nancy, France`}/>
        </ul>
    </>
);

export default function Timeline() {
    const [isShowingFullTimeline, showFullTimeline] = useState(false);

    return (
        <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                Timeline
            </h3>
            <Year>2020</Year>
            <ul>
                <Step title={"Gratuated with a PhD in Computer Science"}>
                    <p>One of the accomplishments I'm most proud of.</p>
                </Step>
                <Step title={"Moved to Paris"}>
                    <p>Leaving Rennes after 6 student years in Brittany.</p>
                </Step>
                <Step title={"Started freelance work"}>
                </Step>
                <Step title={"First academic publication accepted at DAIS 2020"}>
                    <p>Really proud of having a first academic paper in an international conference in Computer
                        Science</p>
                </Step>
            </ul>
            {isShowingFullTimeline ? (
                <FullTimeline/>
            ) : (
                <button
                    type="button"
                    className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
                    onClick={() => showFullTimeline(true)}
                >
                    See More
                    <svg
                        className="h-4 w-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}
