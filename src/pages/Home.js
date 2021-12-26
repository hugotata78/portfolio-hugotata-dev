import React from 'react'
import Abaut from '../components/Abaut'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Repo from '../components/Repo'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Social } from '../components/Social'



export const Home = () => {

    
    
    
    return (
        <div id='page-top'>
            <NavBar />
            <Social />
            <Banner />
            <Abaut />
            <Services />
            <Projects />
            <Repo />
            <Contact />
            <Footer />
        </div>
    )
}
