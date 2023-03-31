import Head from "next/head";
import Nav from "../components/Nav";
import { projets } from "../components/DataProjects";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Power3 } from "gsap";
import ProjectContent from "../components/ProjectContent";

export default function Cuisines() {

        gsap.registerPlugin(ScrollTrigger);

        useEffect(() => {
                // let tlProject = gsap.timeline( { scrollTrigger: { trigger: '.project-item', start: '0', markers: true, pin: false } } );

                document.querySelectorAll(".project-item").forEach((item) => {
                    gsap.to(item, {
                      scrollTrigger: {
                        trigger: item,
                        start: "top center",
                        end: "20% center",
                        scrub: false
                      },
                      x: 0,
                      duration: 0.6,
                      opacity: 1,
                      ease: Power3.easeInOut
                    })});
            
                // tlProject.fromTo('.project-image', { opacity: 0, y: '50px', duration: 0.2, delay: 0.5 }, { opacity: 1, y: 0, stagger: 0.25 });
        }, []);

    return (
        <>
        <Head>
            <title>Projets</title>
            <meta name="description" content="Répertoire des différents projets réalisés par l'entreprise FS Agencebois, allant des cuisines, aux armoires, escaliers et divers agencements, le tout sur-mesure." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className="main overflow-hidden overflow-y-scroll">
            <div className="px-2 md:px-8 mb-12 md:mb-32">
                <h1>This is projects list</h1>
                <div className="">
                    <h2 className="project-details-title">Cuisines</h2>
                        <div className="">
                            <div className="project-wrapper relative flex flex-col gap-y-6 md:gap-y-28 lg:gap-y-32">
                                <Link href="/Projects" className="return-button">
                                    back to projects
                                </Link>
                                <Link href="/Projects" className="return-button-arrow">
                                    <span className=" inline-block rotate-180">➔</span>
                                </Link>
                                {projets.map((projets, idx) => {
                                    if (projets.category === 'cuisine'){
                                        return (
                                            <ProjectContent name={projets.name} img={projets.img} lieu={projets.lieu} date={projets.date} category={projets.category} />
                                            // <div className="project-item opacity-0 flex flex-col-reverse md:flex-col-reverse md:items-end lg:flex-row md:flex-wrap justify-end w-full translate-x-20 gap-x-8">
                                            //     <div className="flex justify-first items-end flex-col-reverse">
                                            //         <h3 className="font-bold text-xl md:text-3xl lg:text-4xl">➔ {projets.name}</h3>
                                            //         <p>{projets.lieu}</p>
                                            //         <h4 className="">{projets.date}</h4>
                                            //     </div>
                                            //     <img className="project-image md:max-w-3/4 lg:max-w-1/2" src={`img/${projets.img}`} alt="" />
                                            // </div>
                                        )
                                    };
                                })}
                            </div>
                        </div>

                </div>
            </div>
        </main>
      </>
    )
}