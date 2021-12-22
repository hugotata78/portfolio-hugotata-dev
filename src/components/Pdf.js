import React, { useEffect } from 'react'
import pdf from '../docs/CV-HUGO-TATARINOFF.pdf'

const Pdf = () => {

    useEffect(()=>{
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    })
    return (
        <div className='pdf'>
            <object
                data={pdf}
                type='application/pdf'
                width="100%"
                height="100%"
            >
                <br />
                    <a href={pdf} id="enlaceDescargarPdf"
                    download={pdf}
                    >No puedes visualizar el CV, da click aquí para descargarlo</a>
            </object>
        </div>
    )
}

export default Pdf
