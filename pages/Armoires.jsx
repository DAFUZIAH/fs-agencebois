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
                <div className="">
                    <h2 className="project-details-title">Armoires</h2>
                        <div className="">
                            <div className="project-wrapper relative flex flex-col gap-y-6 md:gap-y-28 lg:gap-y-32">
                                <Link href="/Projects" className="return-button">
                                    back to projects
                                </Link>
                                <Link href="/Projects" className="return-button-arrow">
                                    <span className=" inline-block rotate-180">➔</span>
                                </Link>
                                {projets.map((projets, idx) => {
                                    if (projets.category === 'armoire'){
                                        return (
                                            <ProjectContent name={projets.name} img={projets.img} lieu={projets.lieu} date={projets.date} category={projets.category} />
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