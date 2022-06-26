import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { FormattedMessage } from 'react-intl'

const Abaut = () => {

    useEffect(() => {
        ScrollReveal().reveal('.move', {
            duration: 2000,
            origin: 'top',
            distance: '-100px'
        })
    })

    return (
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="move col-lg-8 text-center">
                        <h2 className="text-white mt-0">
                            <FormattedMessage
                                id="about.title"
                                defaultMessage="Innovación y Creatividad!"
                            />
                        </h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">
                            <FormattedMessage
                                id='about.description'
                                defaultMessage="En dos palabras puedo resumir mi perfil profesional! A lo que puedo sumar que soy un apasionado por lo que hago. En mi vas a encontrar una persona predispuesta, proactiva, que no le teme a encarar nuevos desafíos y con la constante necesidad en seguir apendiendo. Si deseas interiorizarte un poco más acerca de mi perfil profesional y de las tecnologías que manejo como desarrollador, te invito a descargar mi Hoja de Vida en el link que se encuentra más abajo!"
                            />
                        </p>
                        <a className="btn btn-light btn-lg p-3" href="https://drive.google.com/file/d/1LdR9UcB6F1DcZOJx_8jrgV2v2ILV4had/view?usp=sharing" target='_blank' rel="noreferrer">
                            <FormattedMessage
                                id='about.btn'
                                defaultMessage="Descargar CV"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abaut
