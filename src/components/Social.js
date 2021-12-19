import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../img/facebook-f-brands.svg'
import linkedin from '../img/linkedin-in-brands.svg'
import github from '../img/github-brands.svg'
import twitter from '../img/twitter-brands.svg'
import whatsapp from '../img/whatsapp-brands.svg'
import React from 'react'


export const Social = () => {

    const msg = 'Hola%20me%20gustaría%20contactarte%20para%20conocer%20más%20acerca%20de%20tus%20servicios'
    return (
        <div className='social'>
            <ul>
                <li><a className='facebook' href="https://www.facebook.com/hugohector.tatarinoff/" target='_blank'><i class="bi bi-facebook"></i></a></li>
                <li><a className='linkedin' href="https://www.linkedin.com/in/hugo-tatarinoff-dev/" target='_blank'><i class="bi bi-linkedin"></i></a></li>
                <li><a className='github' href="https://github.com/hugotata78" target='_blank'><i class="bi bi-github"></i></a></li>
                <li><a className='twitter' href="https://twitter.com/TatarinoffHugo" target='_blank'><i class="bi bi-twitter"></i></a></li>
                <li><a className='whatsapp' href={`https://api.whatsapp.com/send?phone=+543755694161&text=${msg}`} target='_blank'><i class="bi bi-whatsapp"></i></a></li>
            </ul>
        </div>
    )
}
