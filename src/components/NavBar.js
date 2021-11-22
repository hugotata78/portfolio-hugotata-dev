import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'

const NavBar = () => {

    const [bgNavbar,setBgNavbar] = useState('bg-transparent')

    const updateBgColor = ()=>{
        if(window.scrollY > 50){
            setBgNavbar('bg-secondary') 
        }else{
            setBgNavbar('bg-transparent')
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',updateBgColor)
    },[updateBgColor])

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${bgNavbar} fixed-top py-3`} id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top"><img src={logo} alt='logo' /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">Acerca de Mi</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portafolios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
