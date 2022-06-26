import React, { useEffect } from 'react'
import portfolio from '../img/portfolio2.png'
import store from '../img/store-app.png'
import covid from '../img/covid.png'
import weather from '../img/weather.png'
import ScrollReveal from 'scrollreveal'
import { FormattedMessage } from 'react-intl'

const Projects = () => {

    useEffect(() => {
        ScrollReveal().reveal('.project-1', {
            duration: 2000,
            origin: 'top',
            distance: '-100px'
        })
        ScrollReveal().reveal('.project-2', {
            duration: 2000,
            origin: 'top',
            distance: '-100px',
            delay: 2200

        })
        ScrollReveal().reveal('.project-3', {
            duration: 2000,
            origin: 'top',
            distance: '-100px',
            delay: 2500

        })
        ScrollReveal().reveal('.project-4', {
            duration: 3000,
            origin: 'top',
            distance: '-100px',
            delay: 2800

        })
    })
    return (
        <div id="portfolio">
            <div className="container-fluid px-1">
                <h1 className="text-dark text-center font-weight-bold py-4">
                    <FormattedMessage
                        id='projects.title'
                        defaultMessage="Mis proyectos"
                    />
                </h1>
                <div className="row g-0">
                    <div className="project-1 col-12 col-md-6 col-lg-3 p-1">
                        <a className="portfolio-box" href="#page-top" title="Project Name">
                            <img className="card-img-top class-img" src={portfolio} alt="store" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    <FormattedMessage
                                        id='projects.portfolioTitle'
                                        defaultMessage="Mi Portfolio personal"
                                    />
                                </div>
                                <div className="project-name">
                                    <FormattedMessage
                                        id='projects.portfolioLink'
                                        defaultMessage="Ver aplicación"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="project-2 col-12 col-md-6 col-lg-3 p-1">
                        <a className="portfolio-box" href="https://my-shoe-store-app.surge.sh/" target='_blank' rel="noopener noreferrer" title="Project Name">
                            <img className="card-img-top class-img" src={store} alt="store" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    <FormattedMessage
                                        id='projects.storeTitle'
                                        defaultMessage="Tienda online"
                                    />
                                </div>
                                <div className="project-name">
                                    <FormattedMessage
                                        id='projects.storeLink'
                                        defaultMessage="Ver aplicación"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="project-3 col-12 col-md-6 col-lg-3 p-1">
                        <a className="portfolio-box" href="https://covid19-application.surge.sh/" target='_blank' rel="noopener noreferrer" title="Project Name">
                            <img className="card-img-top class-img" src={covid} alt="covid" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    <FormattedMessage
                                        id='projects.covidTitle'
                                        defaultMessage="Aplicación Covid-19"
                                    />
                                </div>
                                <div className="project-name">
                                    <FormattedMessage
                                        id='projects.covidLink'
                                        defaultMessage="Ver aplicación"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="project-4 col-12 col-md-6 col-lg-3 p-1">
                        <a className="portfolio-box" href="https://free-weather-report.surge.sh/" target='_blank' rel="noopener noreferrer" title="Project Name">
                            <img className="card-img-top class-img" src={weather} alt="weather" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    <FormattedMessage
                                        id='projects.weatherTitle'
                                        defaultMessage="Aplicación del clima"
                                    />
                                </div>
                                <div className="project-name">
                                    <FormattedMessage
                                        id='projects.weatherLink'
                                        defaultMessage="Ver aplicación"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
