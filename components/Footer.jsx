

export default function Footer(){
    return (
        <div className="footer px-4 flex-col md:flex-row md:flex md:justify-between bg-grey py-8">
            <div className="footer-left flex flex-col gap-2 md:gap-6 mb-8 md:mb-0">
                <div className="">
                    <li>© 2023 – FS Agencebois</li>
                </div>
                <div className="">
                    <li>Route Villageoise 47</li>
                </div>
                <div className="">
                    <li>1617 Remaufens</li>
                </div>
            </div>
            <div className="footer-right flex flex-col gap-2 md:gap-6">
                <div className="">
                    <li className=""><a href="mailto:info@fsagencebois.ch">info@fsagencebois.ch</a></li>
                </div>
                <div className="">
                    <li className=""><a href="tel:0219489900">021 948 99 00</a></li>
                </div>
                <div className="flex gap-4 md:gap-8">
                    <a className="" href="https://www.instagram.com/fsagencebois/" target="_blank" rel="noreferer"><li className="common-link relative inline-block"><i className="fa-brands fa-instagram text-2xl"></i></li></a>
                    <a className="" href="https://www.facebook.com/sauteur.frederic.5/" target="_blank" rel="noreferer"><li className="common-link relative inline-block"><i className="fa-brands fa-facebook-f text-2xl"></i></li></a>
                </div>
            </div>
        </div>
    )
}