import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pdf from './components/Pdf'
import { Home } from './pages/Home'

const Rout = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/pdf' element={ <Pdf />} />
        </Routes>
    )
}

export default Rout
