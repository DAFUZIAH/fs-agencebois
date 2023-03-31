import Nav from "../components/Nav"
import Footer from "../components/Footer"
import gsap from "gsap";
import { useEffect } from "react";
import { Power3 } from "gsap";

const Layout = ({ children }) => {

    useEffect(() => {
        let layoutAppear = gsap.timeline({ duration: .3, ease: Power3.easeInOut });

        layoutAppear.to('.footer', { opacity: 1, display: 'flex', y: 0 });
    })

    return (
        <div className="content">
            <Nav className="z-50"></Nav>
                {children}
            <Footer />
       </div>
    )
}

export default Layout