import Head from "next/head";
import Nav from "../components/Nav";
import { useEffect } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";

export default function Contact() {

    // let appearContact = gsap.timeline({ defaults: { ease: Power3.easeInOut } });

    // useEffect(() => {
    //     appearContact.fromTo('.contact-content', { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)', duration: .9 });
    // });

    return (
        <>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Contactez FS Agencebois afin de parler de votre projet de menuiserie." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* <Nav></Nav> */}
        <main>
            <header className="">
                <div className="layout xl:max-w-desktop-layout mx-auto pl-4 pt-20 xl:pl-0">
                    <h1 className="main-title">Contactez-nous</h1>
                </div>
            </header>
            <div className="layout mb-20 md:mb-32">
                <div className="contact-content h-halfScreen flex flex-col md:flex-row justify-between gap-8">
                    <div className="contact-info pl-4 md:pl-8 pt-10">
                        <div className="mb-14">
                            <h3 className="contact-info-title text-xl mb-4 font-bold">
                                Contact
                            </h3>
                            <a className="block mb-4" href="mailto:info@fsagencebois.ch">
                                <div className="contact-button text-xl md:text-2xl common-link relative inline-block">
                                    info@fsagencebois.ch
                                </div>
                            </a>
                            <a className="block" href="tel:0219489900">
                                <div className="contact-button text-xl md:text-2xl common-link relative inline-block">
                                    021 948 99 00
                                </div>
                            </a>
                        </div>
                        <div className="">
                            <h3 className="contact-info-title text-xl mb-4 font-bold">
                                Suivez-nous sur les réseaux
                            </h3>
                            <div className="flex gap-4 md:gap-8">
                                <a className="" href="https://www.instagram.com/fsagencebois/" target="_blank" rel="noreferer"><li className="common-link relative inline-block"><i className="fa-brands fa-instagram text-2xl"></i></li></a>
                                <a className="" href="https://www.facebook.com/sauteur.frederic.5/" target="_blank" rel="noreferer"><li className="common-link relative inline-block"><i className="fa-brands fa-facebook-f text-2xl"></i></li></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925.5427921664786!2d6.878452513030906!3d46.52890546628051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e83eed0fa0453%3A0xd1d39e5d0aa6bf0!2sF.S.%20Agencebois%20S%C3%A0rl!5e0!3m2!1sfr!2sch!4v1680182441992!5m2!1sfr!2sch" allowfullscreen="" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </main>
      </>
    )
}