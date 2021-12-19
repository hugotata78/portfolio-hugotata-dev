import React, { useCallback, useEffect, useState } from 'react'
import Abaut from '../components/Abaut'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Repo from '../components/Repo'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Social } from '../components/Social'
import { ButtonUp } from '../components/ButtonUp'

export const Home = () => {

    const [buttonUp,setButonUp] = useState('d-none')

    const changeDisplayButton = useCallback(()=>{
        if(window.scrollY >= 500){
            setButonUp('d-block')
        }else{
            setButonUp('d-none')
        }
    },[setButonUp])

    useEffect(()=>{
        window.addEventListener('scroll',changeDisplayButton)
    },[changeDisplayButton])
    
    return (
        <div id='page-top'>
            <NavBar />
            <Social />
            <Banner />
            <ButtonUp buttonUp={buttonUp} />
            <Abaut />
            <Services />
            <Projects />
            <Repo />
            <Contact />
            <Footer />
        </div>
    )
}
