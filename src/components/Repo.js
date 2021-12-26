import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Repo = () => {

    useEffect(() => {
        ScrollReveal().reveal('.repo', {
            duration: 2000,
            origin: 'top',
            distance: '-100px'
        })
    })

    return (
        <section className="page-section bg-dark text-white" style={{marginTop:'150px'}}>
            <div className="container repo px-4 px-lg-5 text-center">
                <h2 className="mb-4">Para ver repositorios en Github</h2>
                <a className="btn btn-light btn-lg p-3" href="https://github.com/hugotata78" target='_blank' rel="noopener noreferrer">Acceder aquí</a>
            </div>
        </section>
    )
}

export default Repo
