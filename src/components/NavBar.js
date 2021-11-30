import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'


const NavBar = () => {

    const [bgNavbar, setBgNavbar] = useState('')
    const [t, i18n] = useTranslation(['navbar'])
    const lang = i18n.language === 'es' ? t('spanish') : t('english')
    console.log(i18n)

    const handleOnClickEs = (e) => {
        e.preventDefault()
        i18n.changeLanguage('es')
    }

    const handleOnClickEn = (e) => {
        e.preventDefault()
        i18n.changeLanguage('en')
    }


    const updateBgColor = () => {
        if (window.scrollY > 50) {
            setBgNavbar('navbar-shrink')
        } else {
            setBgNavbar('')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateBgColor)
    }, [updateBgColor])

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${bgNavbar} fixed-top py-3`} id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top"><img src={logo} alt='logo' /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">Acerca de Mi</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Proyectos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><FontAwesomeIcon icon={faGlobe} /> </span>
                                {lang}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#" onClick={handleOnClickEs}>{t('spanish')}</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" onClick={handleOnClickEn}>{t('english')}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
