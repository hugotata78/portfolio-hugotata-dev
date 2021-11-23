import { faLaptopCode, faServer, faTabletAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Services = () => {
    return (
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Mis Servicios</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><span className="fs-1 text-primary"><FontAwesomeIcon icon={faLaptopCode} /></span></div>
                            <h3 className="h4 mb-2">Desarrollador Front-End</h3>
                            <p className="text-muted mb-0">Desarrollo de aplicaciones y sitios web del lado del Cliente</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><span className=" fs-1 text-primary"><FontAwesomeIcon icon={faServer}/></span></div>
                            <h3 className="h4 mb-2">Desarrollador Back-End</h3>
                            <p className="text-muted mb-0">Desarrollo de aplicaciones del lado del servidor, como así también configuración y conexión a bases de datos.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><span className=" fs-1 text-primary"><FontAwesomeIcon icon={faTabletAlt} /></span></div>
                            <h3 className="h4 mb-2">Diseño responsive</h3>
                            <p className="text-muted mb-0">Creación de aplicaciones adaptables a cualquier tipo de dispositivo!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
