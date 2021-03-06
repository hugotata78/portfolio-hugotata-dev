import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { FormattedMessage } from 'react-intl'


const Banner = () => {

    useEffect(() => {
        ScrollReveal().reveal('.title-one', {
            duration: 2000,
            origin: 'right',
            distance: '-150px'
        })
        ScrollReveal().reveal('.title-two', {
            duration: 2000,
            origin: 'top',
            distance: '-100px',

        })
    })

    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="title-one text-white font-weight-bold">
                            <FormattedMessage
                                id="ban.title"
                                defaultMessage="Desarrollador Full Stack."
                            />
                        </h1>
                        <hr className="divider" />
                    </div>
                    <div className="title-two col-lg-8 align-self-baseline">
                        <p className=" text-white-75 mb-5">
                            <FormattedMessage
                                id="ban.description"
                                defaultMessage="Hola! Mi nombre es Hugo Tatarinoff y soy Desarrollador full Stack, me considero una persona sencilla, eso si inovadora y creativa, apasionado por la Programación y Nuevas Técnologias"
                            />
                        </p>
                        <a className="btn btn-primary btn-lg p-3" href="#about">
                            <FormattedMessage
                                id='ban.btn'
                                defaultMessage="Saber Más"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
