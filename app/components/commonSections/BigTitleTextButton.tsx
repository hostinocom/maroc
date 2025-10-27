import ConsultButton from "../ui/ConsultButton"


const BigTitleTextButton = ()=>{
    return(
        <section className="lg:py-[150px] py-[80px] bg-gray-100">
            <div className="contianer flex text-center flex-col items-center justify-center gap-y-4">
                <h2 className="max-big-title">
                    Confiez à notre agence SEO<br />la mission de faire réussir votre business
                </h2>
                <p className="paragraph">Envie d’en savoir plus sur notre agence et nos experts ? Discutons de votre projet et trouvons des solutions adaptées !</p>
                <ConsultButton href={"https://www.hostino.ma/contact"} text={"Contactez-nous"} />
                
            </div>
        </section>
    )
}

export default BigTitleTextButton