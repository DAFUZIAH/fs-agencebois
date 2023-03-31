import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Values(){

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
            let tlValues = gsap.timeline( { scrollTrigger: { trigger: '.values-layout', start: '-500', markers: false, pin: false } } );
        
            tlValues.fromTo('.value-item', { opacity: 0, y: '50px', duration: 0.2, delay: 0.5 }, { opacity: 1, y: 0, stagger: 0.25 });
    }, []);

    return (
            <>
                <div className="values-layout bg-yellow mb-20 md:mb-32">
                    <div className="layout flex flex-col justify-center gap-y-20 md:flex-row md:justify-between md:flex-wrap md:items-center h-tierScreen md:h-halfScreen">
                        <div className="value-item">
                            <div className="circle">
                                <img className="w-full" src="logo/SVG/ruler.svg" alt="Ruler icon." />
                            </div>
                            <h2>Fabrication sur-mesure</h2>
                        </div>
                        <div className="value-item">
                            <div className="circle">
                            <img className="w-full" src="logo/SVG/hammer.svg" alt="Medal icon." />  
                            </div>
                            <h2>Service artisanal</h2>
                        </div>
                        <div className="value-item">
                            <div className="circle">
                                <img className="w-full" src="logo/SVG/medal.svg" alt="Medal icon." />  
                            </div>
                            <h2>Matériel de qualité</h2>
                        </div>
                    </div>
                </div>
            </>
    )
}