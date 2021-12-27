import React, { useEffect } from 'react'
// import pdf from '../docs/CV-HUGO-TATARINOFF.pdf'
// import { PDFReader } from 'react-read-pdf'
import docPdf from '../img/CV-HUGO-TATARINOFF.pdf'

const Pdf = () => {

    useEffect(()=>{
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    })

    console.log(docPdf)
    return (
        <div className='pdf'>

            
            <object
                data={docPdf}
                type='application/pdf'
            >
                <br />
                    <a href={docPdf} id="enlaceDescargarPdf"
                    download={docPdf}
                    >No puedes visualizar el CV, da click aquí para descargarlo</a>
            </object> 
        </div>
    )
}

export default Pdf
