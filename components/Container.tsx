import {ReactNode} from "react";
import Footer from "./Footer";

type ContainerProps = {
    children?: ReactNode
}
const Container = ({children}: ContainerProps) =>{
    return (
        <main>
            {children}
            <Footer/>
        </main>
    )
}
export default Container;