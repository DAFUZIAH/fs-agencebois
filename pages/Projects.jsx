import Head from "next/head";
import Nav from "../components/Nav";
import { projets } from "../components/DataProjects";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Power3 } from "gsap";

export default function Projects() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // let tlProject = gsap.timeline( { scrollTrigger: { trigger: '.project-item', start: '0', markers: true, pin: false } } );

        // document.querySelectorAll(".project-category-wrapper-single::before").forEach((item) => {
        //     gsap.to(item, {
        //       scrollTrigger: {
        //         trigger: item,
        //         start: "top center",
        //         end: "20% center",
        //         scrub: false,
        //         markers: true
        //       },
        //       duration: 0.6,
        //       opacity: 1,
        //       ease: Power3.easeInOut
        //     })});

        var elementAppear = document.querySelectorAll('.project-category-wrapper-single');
        let i;

        function revealElement(){
                for( i = 0; i < elementAppear.length; i++ ){

                var windowHeight = window.innerHeight;
                var topPoint = elementAppear[i].getBoundingClientRect().top;
                var revealpoint = 400;

                if(topPoint < windowHeight - revealpoint){
                    elementAppear[i].classList.add('active');
                }
            }
        }
    
        window.addEventListener('scroll', revealElement);
        // tlProject.fromTo('.project-image', { opacity: 0, y: '50px', duration: 0.2, delay: 0.5 }, { opacity: 1, y: 0, stagger: 0.25 });
}, []);

    useEffect(() => {
            // let tlProject = gsap.timeline( { scrollTrigger: { trigger: '.project-item', start: '0', markers: true, pin: false } } );

            document.querySelectorAll(".project-category").forEach((item) => {
                gsap.to(item, {
                  scrollTrigger: {
                    trigger: item,
                    start: "top center",
                    end: "20% center",
                    scrub: false,
                    markers: false
                  },
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  y: 0,
                  duration: .6,
                  opacity: 1,
                  ease: Power3.easeInOut
                })});
        
            // tlProject.fromTo('.project-image', { opacity: 0, y: '50px', duration: 0.2, delay: 0.5 }, { opacity: 1, y: 0, stagger: 0.25 });
    }, []);

    return (
        <>
        <Head>
            <title>FS Agencebois - Projets</title>
            <meta name="description" content="Répertoire des différents projets réalisés par l'entreprise FS Agencebois, allant des cuisines, aux armoires, escaliers et divers agencements, le tout sur-mesure." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className="main">
            <header className="">
                <div className="layout xl:max-w-desktop-layout mx-auto pl-4 pt-20 xl:pl-0">
                    <h1 className="main-title">Choisissez une catégorie</h1>
                </div>
            </header>
            <div className="layout mb-20 md:mb-32">
                <div className="project-category-wrapper flex flex-col gap-y-12 md:gap-y-24">
                    <div className="project-category-wrapper-single relative">
                        {projets.slice(0, 1).map((projets, idx) => {
                            if (projets.category === 'cuisine'){
                                return (
                                    <Link className="" href="/Cuisines">
                                        <div className="project-category">
                                            <h3 className="absolute top-0 md:relative font-bold text-2xl md:text-3xl lg:text-5xl"><span className="mr-4 opacity-0">➔</span>{projets.category}</h3>
                                            <img className="w-full md:max-w-1/2" src={`img/${projets.img}`} alt="" />
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div className="project-category-wrapper-single relative">
                        {projets.slice(0, 2).map((projets, idx) => {
                            if (projets.category === 'divers'){
                                return (
                                    <Link className="" href="/Divers">
                                        <div className="project-category">
                                            <h3 className="absolute top-0 md:relative font-bold text-2xl md:text-3xl lg:text-5xl"><span className="mr-4 opacity-0">➔</span>{projets.category}</h3>
                                            <img className="w-full md:max-w-1/2" src={`img/${projets.img}`} alt="" />
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div className="project-category-wrapper-single relative">
                        {projets.slice(0, 9).map((projets, idx) => {
                            if (projets.category === 'Salle de bain'){
                                return (
                                    <Link className="" href="/Bathroom">
                                        <div className="project-category">
                                            <h3 className="absolute top-0 md:relative font-bold text-2xl md:text-3xl lg:text-5xl"><span className="mr-4 opacity-0">➔</span>{projets.category}</h3>
                                            <img className="w-full md:max-w-1/2" src={`img/${projets.img}`} alt="" />
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div className="project-category-wrapper-single relative">
                        {projets.slice(0, 13).map((projets, idx) => {
                            if (projets.category === 'armoire'){
                                return (
                                    <Link className="" href="/Armoires">
                                        <div className="project-category">
                                            <h3 className="absolute top-0 md:relative font-bold text-2xl md:text-3xl lg:text-5xl"><span className="mr-4 opacity-0">➔</span>{projets.category}</h3>
                                            <img className="w-full md:max-w-1/2" src={`img/${projets.img}`} alt="" />
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </main>
      </>
    )
}