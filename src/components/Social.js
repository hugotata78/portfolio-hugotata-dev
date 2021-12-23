
import React from 'react'


export const Social = () => {

    const msg = 'Hola%20me%20gustaría%20contactarte%20para%20conocer%20más%20acerca%20de%20tus%20servicios'
    return (
        <div className='social'>
            <ul>
                <li><a className='facebook' href="https://www.facebook.com/hugohector.tatarinoff/" target='_blank' rel="noreferrer"><i className="bi bi-facebook"></i></a></li>
                <li><a className='linkedin' href="https://www.linkedin.com/in/hugo-tatarinoff-dev/" target='_blank' rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
                <li><a className='github' href="https://github.com/hugotata78" target='_blank' rel="noreferrer"><i className="bi bi-github" rel="noreferrer"></i></a></li>
                <li><a className='twitter' href="https://twitter.com/TatarinoffHugo" target='_blank' rel="noreferrer"><i className="bi bi-twitter"></i></a></li>
                <li><a className='whatsapp' href={`https://api.whatsapp.com/send?phone=+543755694161&text=${msg}`} target='_blank' rel="noreferrer"><i className="bi bi-whatsapp"></i></a></li>
            </ul>
        </div>
    )
}
