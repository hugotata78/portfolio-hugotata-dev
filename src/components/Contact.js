import { faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
require('dotenv').config()

const Contact = () => {

    const [name,setName] = useState('')
    const [mail,setMail] = useState('')
    const [phone,setPhone] = useState('')
    const [message,setMessage] = useState('')
    const data ={name,mail,phone,message}
    const service_id = 'service_p9p1kt4'
    const user_id ='user_uh0khwo3xqSadotU9Xlag'
    const template_id = 'template_6fcoelj'

    const handleChangeName = (e)=>{
        setName(e.target.value)
    }

    const handleChangeMail = (e)=>{
        setMail(e.target.value)
    }

    const handleChangePhone = (e)=>{
        setPhone(e.target.value)
    }

    const handleChangeMessage = (e)=>{
        setMessage(e.target.value)
    }

    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("service_p9p1kt4","template_i91cbxu", e.target,"user_uh0khwo3xqSadotU9Xlag")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
    return (
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">No dudes en contactarme!</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">¿Listo para comenzar tu próximo proyecto? Enviame un mensaje y me pondré en contacto contigo lo antes posible.</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={sendEmail}>
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" name="name" type="text" placeholder="Ingrese su nombre..." data-sb-validations="required" onChange={handleChangeName} />
                                <label for="name">Nombre Completo</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">Se requiere un nombre.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" name="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" onChange={handleChangeMail}/>
                                <label for="email">Dirección de Email</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">Se requier un Email.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">El Email no es válido.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" name="phone" type="tel" placeholder="(555) 555-555" data-sb-validations="required" onChange={handleChangePhone}/>
                                <label for="phone">Numero de Teléfono</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Se requier un número de teléfono.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <textarea className="form-control" id="message" name="message" type="text" placeholder="Ingrese aquí su mensaje..." style={{height: "10rem"}} data-sb-validations="required" onChange={handleChangeMessage}></textarea>
                                <label for="message">Mensaje</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Se requiero un mensaje.</div>
                            </div>
                            
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Envío de formulario exitoso!</div>
                                </div>
                            </div>
                            
                            <div className="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">¡Error al enviar el mensaje!</div></div>
                            
                            <div className="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit">Enviar</button></div>
                        </form>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <span className=" fs-2 mb-3 text-muted"><FontAwesomeIcon icon={faMobileAlt} /></span>
                        <div>+549 (3755) 694161</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
