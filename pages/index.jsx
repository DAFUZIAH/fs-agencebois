import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Nav from '../components/Nav';
import Values from '../components/Values';
import Devis from '../components/Devis';
import { projets } from '../components/DataProjects';

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export default function Home() {


    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    } 


  return (
    <>
      <Head>
        <title>FS Agencebois - Accueil</title>
        <meta name="description" content="FS Agencebois est une entreprise formatrice spécialisé dans la menuiserie et l'agencement sur-mesure de qualité suisse." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav></Nav> */}
      <main className="main">
          <header className="header bg-hero-home mb-20 md:mb-32">
            <div className="layout xl:max-w-desktop-layout mx-auto pl-4 pt-20 xl:pl-0">
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white uppercase mb-2 md:mb-4 selection:bg-dark-color"><span className="border-yellow border-b-4">Menuiserie</span> & <br /> <span className="border-yellow border-b-4">Agencement</span>
              </h1>
            </div>
          </header>
          <div className="layout mb-20 md:mb-32">
            <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
              {/* <div className="image-wrapper overflow-hidden flex justify-center items-center max-w-1/2"> */}
                <img className="md:max-w-1/2" src="./img/cuisines/cuisine5.webp" alt="Cuisine." />
              {/* </div> */}
              <div className="">
                <h2 className="font-bold text-3xl mb-4">FS AGENCEBOIS</h2>
                <p className="common-text mb-6">
                  Nous sommes une entreprise formatrice qui vous propose un service artisanal de qualité suisse. Nous fabriquons tous types d’agencements intérieurs sur-mesure, selon les matériaux et les couleurs de votre choix.

                  <br />
                  <br />

                  N’hésitez pas à visiter notre galerie de projets !

                  <br />
                  <br />

                  Nous restons à disposition pour toutes informations complémentaires. Contactez-nous afin de parler de votre projet.
                </p>
                <div>
                <Link href="/Contact" className="common-link relative font-bold uppercase text-xl">
                  Contactez-nous ➔
                </Link>
                </div>
              </div>
            </section>
        </div>
        <Values></Values>
        <div className="layout mb-20 md:mb-32">
            <h2 className="font-bold text-3xl mb-4">Projets Récents</h2>
            <div className="flex flex-col md:flex-row justify-center flex-wrap lg:flex-nowrap gap-4 mb-6 md:mb-12">
              {projets.slice(0, 3).map((projets, index) => {
            {/* {shuffle(Array.from(projets)).slice(0, 3).map((projets, index) => { */}
                return (
                  <div className="gallery-preview cursor-pointer">
                    <img className="" src={`img/${projets.img}`} alt="Image." />
                    {/* <h2 className="text-white">{projets.name}</h2> */}
                  </div>
                )
              })}
              {/* <div className="project-item"></div>
              <div className="project-item"></div>
              <div className="project-item"></div> */}
            </div>
            <div className="button-wrapper w-48 mx-auto flex justify-center">
              <Link className="common-link inline-block relative font-bold text-2xl" href="/Projects">
                Plus de projets
              </Link>
            </div>
        </div>
        <Devis></Devis>
      </main>
    </>
  )
}
