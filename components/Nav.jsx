import Link from "next/link";
import { useRef, useEffect, useState } from 'react';
import gsap from "gsap";

    export default function Nav() {

    let [menuState, setMenuState] = useState(false);


        let sidebarNav = useRef(null);
        let burger = useRef(null);
        const menuTimeline = useRef();

        useEffect(() => {


            menuTimeline.current = gsap.timeline({ paused: true });
            menuTimeline.current.to([sidebarNav],
              {
                duration: 0.75,
                x: '0%',
                ease: 'power3.inOut',
                stagger: {
                  amount: 0.5
                }
              },
              menuTimeline.current.to([burger],{
                duration: 0.75,
                ease: 'power3.inOut',
                rotate: 90
              })
            );
        }, []);

        useEffect(() => {
            menuState ? menuTimeline.current.timeScale(1).play() : menuTimeline.current.timeScale(2).reverse();
          }, [menuState]);


        return (
            <>
            <div className="nav-container flex justify-between items-center px-4 bg-white shadow-3xl z-50">
                <div className="logo">
                    <Link href="/">
                        <img className="logo" src="logo/logo-fs.png" alt="" />
                    </Link>
                </div>
                <button onClick={() => setMenuState(!menuState)} ref={el => (burger = el)} className={`burger-menu md:hidden relative ${menuState ? 'burger-close' : ''}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <nav ref={el => (sidebarNav = el)} className="nav translate-x-full fixed z-50 h-full top-0 right-0 md:hidden flex items-center bg-white w-sm">
                    {/* <div className="fixed w-full h-full bg-grey left-0">

                    </div> */}
                    <ul className="flex flex-col mx-auto gap-12 font-bold text-xl">
                        <li>
                            <Link onClick={() => setMenuState(!menuState)} href="/">
                                ACCUEIL
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setMenuState(!menuState)} href="/Projects">
                                PROJETS
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setMenuState(!menuState)} href="/Jobs">
                                JOBS
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setMenuState(!menuState)} href="/Contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="hidden postMd:translate-x-0 items-center postMd:flex postMd:bg-transparent postMd:relative">
                    <ul className="flex flex-row gap-8">
                        <li>
                            <Link href="/">
                                ACCUEIL
                            </Link>
                        </li>
                        <li>
                            <Link href="/Projects">
                                PROJETS
                            </Link>
                        </li>
                        <li>
                            <Link href="/Jobs">
                                JOBS
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }