export default function Devis(){
    
    return(
        <>
            <div className="layout bg-yellow h-halfScreen mb-20 md:mb-32">
                <div className="flex flex-col items-center justify-center h-full gap-16">
                    <h2 className="text-2xl text-center md:text-4xl font-bold">
                        Parlez-nous de votre projet !
                    </h2>
                    <a href="mailto:info@fsagencebois.ch">
                        <div className="font-bold md:text-2xl bg-white inline-block py-4 px-8">
                            Demander un devis
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}