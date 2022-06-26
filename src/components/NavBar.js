import React, { useCallback, useContext, useEffect, useState } from 'react'
import logo from '../img/logo.svg'
import { FormattedMessage } from 'react-intl'
import { DataContext } from '../context/DataProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {

    const value = useContext(DataContext)
    const [locale] = value.locale
    const handleOnChangeEnglish = value.handleOnChangeEnglish
    const handleOnChangeSpanish = value.handleOnChangeSpanish

    const [bgNavbar, setBgNavbar] = useState('')
    const updateBgColor = useCallback(() => {
        if (window.scrollY > 50) {
            setBgNavbar('navbar-shrink')
        } else {
            setBgNavbar('')
        }
    }, [setBgNavbar]
    )
    useEffect(() => {
        window.addEventListener('scroll', updateBgColor)
    })



    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${bgNavbar} fixed-top py-3`} id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top"><img src={logo} alt='logo' /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                <FormattedMessage
                                    id="nav.about"
                                    defaultMessage="Acerca de mi"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">
                                <FormattedMessage
                                    id="nav.services"
                                    defaultMessage="Servicios"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">
                                <FormattedMessage
                                    id="nav.projects"
                                    defaultMessage="Proyectos"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                <FormattedMessage
                                    id="nav.contact"
                                    defaultMessage="Contacto"
                                />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><FontAwesomeIcon icon={faGlobe} /> </span>
                                {locale}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="/" onClick={handleOnChangeEnglish}>
                                        <FormattedMessage
                                            id="nav.english"
                                            defaultMessage="Inglés"
                                        />
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="/" onClick={handleOnChangeSpanish}>
                                        <FormattedMessage
                                            id="nav.spanish"
                                            defaultMessage="Español"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
