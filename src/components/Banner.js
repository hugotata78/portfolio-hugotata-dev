import React from 'react'



const Banner = () => {

    
    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="span-cursor text-white font-weight-bold">Desarrollador Full Stack. </h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Hola! Mi nombre es Hugo Tatarinoff y soy Desarrollador full Stack, me considero una persona sencilla, eso si inovadora y creativa, apasionado por la Programación y Nuevas Técnologias</p>
                        <a className="btn btn-primary btn-lg p-3" href="#about">Saber Más</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
