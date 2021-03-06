import { faLaptopCode, faServer, faTabletAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { FormattedMessage } from 'react-intl'


const Services = () => {

    useEffect(() => {
        ScrollReveal().reveal('.front-service', {
            duration: 2000,
            origin: 'top',
            distance: '-100px'
        })
        ScrollReveal().reveal('.back-service', {
            duration: 2000,
            origin: 'top',
            distance: '-100px',
            delay: 2200

        })
        ScrollReveal().reveal('.responsive-service', {
            duration: 2000,
            origin: 'top',
            distance: '-100px',
            delay: 2500

        })
    })

    return (
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">
                    <FormattedMessage
                        id='services.title'
                        defaultMessage="Mis Servicios"
                    />
                </h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="front-service col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><span className="fs-1 text-primary"><FontAwesomeIcon icon={faLaptopCode} /></span></div>
                            <h3 className="h4 mb-2">
                                <FormattedMessage
                                    id='services.frontTitle'
                                    defaultMessage="Desarrollador Front-End"
                                />
                            </h3>
                            <p className="text-muted mb-0">
                                <FormattedMessage
                                    id='services.frontDescription'
                                    defaultMessage="Desarrollo de aplicaciones y sitios web del lado del Cliente."
                                />
                            </p>
                        </div>
                    </div>
                    <div className="back-service col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><span className=" fs-1 text-primary"><FontAwesomeIcon icon={faServer} /></span></div>
                            <h3 className="h4 mb-2">
                                <FormattedMessage
                                    id='services.backTitle'
                                    defaultMessage="Desarrollador Back-End"
                                />
                            </h3>
                            <p className="text-muted mb-0">
                                <FormattedMessage
                                    id='services.backDescription'
                                    defaultMessage="Desarrollo de aplicaciones del lado del servidor, como as?? tambi??n configuraci??n y conexi??n a bases de datos."
                                />
                            </p>
                        </div>
                    </div>
                    <div className="responsive-service col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><span className=" fs-1 text-primary"><FontAwesomeIcon icon={faTabletAlt} /></span></div>
                            <h3 className="h4 mb-2">
                                <FormattedMessage
                                    id='services.responsiveTitle'
                                    defaultMessage="Dise??o responsive"
                                />
                            </h3>
                            <p className="text-muted mb-0">
                                <FormattedMessage
                                    id='services.responsiveDescription'
                                    defaultMessage="Creaci??n de aplicaciones adaptables a cualquier tipo de dispositivo!"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
