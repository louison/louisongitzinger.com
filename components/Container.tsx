import {ReactNode} from "react";
import Footer from "./Footer";
import NextLink from 'next/link';
import Link from "next/link";

type ContainerProps = {
    children?: ReactNode
}
const Container = ({children}: ContainerProps) => {

    return (
        <div>
            <nav
                className="sticky-nav flex flex-row justify-around sm:justify-between items-center max-w-4xl w-full p-2 my-0 my-8 md:mb-16 mx-auto bg-white dark:bg-black bg-opacity-60">
                <div className="flex items-center sm:justify-start justify-around w-full">

                    {/*<NextLink href="/dashboard">*/}
                    {/*    <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">*/}
                    {/*        Dashboard*/}
                    {/*    </a>*/}
                    {/*</NextLink>*/}
                    <NextLink href="/">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
                    </NextLink>
                    {/*<NextLink href="/warehouse">*/}
                    {/*    <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Warehouse</a>*/}
                    {/*</NextLink>*/}
                    <NextLink href="/phd">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">PhD</a>
                    </NextLink>
                    <NextLink href="/rapsodie">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Rapsodie</a>
                    </NextLink>
                    <NextLink href="/about">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
                    </NextLink>
                </div>
                <Link
                    href="mailto:gitzingerlouison@gmail.com"
                >
                    <a target="_blank"
                       className="hidden sm:block"
                       rel="noopener noreferrer">
                        <button
                            className="px-2 font-bold h-8 bg-green-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                            type="submit"
                        >
                            Hire me
                        </button>
                    </a>

                </Link>

            </nav>
            <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
                {children}
                <Footer/>
            </main>
        </div>
    )
}
export default Container;