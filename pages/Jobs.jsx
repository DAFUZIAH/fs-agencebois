import Head from "next/head";
import Nav from "../components/Nav";

export default function Contact() {

    return (
        <>
        <Head>
            <title>FS Agencebois - Jobs</title>
            <meta name="description" content="Contactez FS Agencebois afin de parler de votre projet de menuiserie." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <header className="">
                <div className="layout article xl:max-w-desktop-layout mx-auto pl-4 pt-20 xl:pl-0">
                    <h1 className="main-title">Postes vacants</h1>
                </div>
            </header>
            <div className="layout article mb-20 md:mb-32">
                <div className="job-item">
                    <h2 className="job-title">Poseur-euse qualifié-ée</h2>
                    <p className="job-text mb-4">
                        Notre entreprise est à la recherche d'un-e poseur-euse afin de compléter notre équipe.
                    </p>
                    <h3 className="job-title-section">
                        Responsabilité
                    </h3>
                    <p className="job-text">
                        Vous réaliserez divers types de travaux :
                    </p>
                    <ul className="mb-4">
                        <li><span className="mr-2">➔</span>Poses de cuisines ;</li>
                        <li><span className="mr-2">➔</span>Agencement divers ;</li>
                        <li><span className="mr-2">➔</span>Poses de parquet ;</li>
                        <li><span className="mr-2">➔</span>Et plus encore ! ;</li>
                    </ul>
                    <h3 className="job-title-section">
                        Qualités souhaitées
                    </h3>
                    <ul className="mb-4">
                        <li><span className="mr-2">➔</span>Motivation  ;</li>
                        <li><span className="mr-2">➔</span>Autonomie ;</li>
                        <li><span className="mr-2">➔</span>Flexibilité ;</li>
                    </ul>
                    <h3 className="job-title-section">
                        Avantages
                    </h3>
                    <ul className="mb-4">
                        <li><span className="mr-2">➔</span>Travailler au sein d'une équipe dynamique ;</li>
                        <li><span className="mr-2">➔</span>Réaliser des projets épanouissants et divers avec un matériel de qualité ;</li>
                        <li><span className="mr-2">➔</span>Semaine de 4 jours et demi, congé le vendredi après-midi ;</li>
                    </ul>
                    <a className="" href="mailto:info@fsagencebois.ch">
                        <div className="common-link relative inline-block font-bold text-lg md:text-xl">
                            Postuler pour ce poste
                        </div>
                    </a>
                </div>
            </div>
        </main>
      </>
    )
}