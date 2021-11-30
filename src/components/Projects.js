import React from 'react'
import store from '../img/store-app.png'
import covid from '../img/covid.png'
import weather from '../img/weather.png'

const Projects = () => {
    
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <h1 className="text-dark text-center font-weight-bold py-4">Mis proyectos</h1>
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="https://my-shoe-store-app.surge.sh/" target='_blank' rel="noopener noreferrer" title="Project Name">
                            <img className="card-img-top class-img" src={store} alt="store" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Tienda online</div>
                                <div className="project-name">Ver aplicación</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="https://covid19-application.surge.sh/" target='_blank' rel="noopener noreferrer" title="Project Name">
                            <img className="card-img-top class-img" src={covid} alt="covid" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Aplicación Covid-19</div>
                                <div className="project-name">Ver aplicación</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="https://free-weather-report.surge.sh/" target='_blank' rel="noopener noreferrer" title="Project Name">
                            <img className="card-img-top class-img" src={weather} alt="weather" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Aplicación del clima</div>
                                <div className="project-name">Ver aplicación</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
