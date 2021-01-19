import {ReactNode} from "react";
import Footer from "./Footer";
import NextLink from 'next/link';
import NowPlaying from "./NowPlaying";

type ContainerProps = {
    children?: ReactNode
}
const Container = ({children}: ContainerProps) => {

    return (
        <div>
            <nav className="sticky-nav flex justify-center items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
                <NowPlaying/>
                <div>
                    {/*<NextLink href="/dashboard">*/}
                    {/*    <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">*/}
                    {/*        Dashboard*/}
                    {/*    </a>*/}
                    {/*</NextLink>*/}
                    <NextLink href="/">
                        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
                    </NextLink>
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
            </nav>
            <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
                {children}
                <Footer/>
            </main>
        </div>
    )
}
export default Container;