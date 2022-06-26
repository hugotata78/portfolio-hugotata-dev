import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useContext } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import ScrollReveal from 'scrollreveal'
import { DataContext } from '../context/DataProvider'
import { FormattedMessage } from 'react-intl'
require('dotenv').config()

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [errorName, setErrorName] = useState('d-none')
    const [errorEmail, setErrorEmail] = useState('d-none')
    const [errorPhone, setErrorPhone] = useState('d-none')
    const [errorMessage, setErrorMessage] = useState('d-none')
    const [emailSuccess, setEmailSuccess] = useState('d-none')
    const [emailError, setEmailError] = useState('d-none')
    const service_id = process.env.REACT_APP_SERVICE_ID
    const user_id = process.env.REACT_APP_USER_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    const value = useContext(DataContext)
    const [messages] = value.messages
    

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setErrorName('d-none')
        setErrorEmail('d-none')
        setErrorPhone('d-none')
        setErrorMessage('d-none')
        setEmailSuccess('d-none')
        setEmailError('d-none')
    }
    function sendEmail(e) {
        e.preventDefault();
        const { name, email, phone, message } = data
        if (!name || !email || !phone || !message) {
            if (name === '') {
                setErrorName('d-block')
            }
            if (email === '') {
                setErrorEmail('d-block')
            }
            if (phone === '') {
                setErrorPhone('d-block')
            }
            if (message === '') {
                setErrorMessage('d-block')
            }


        } else {
            emailjs.sendForm(service_id, template_id, e.target, user_id)
                .then((result) => {
                    Swal.fire(
                        messages["success.title"],
                        messages['success.message'],
                        'success'
                    )
                }, (error) => {

                    Swal.fire(
                        messages['error.title'],
                        messages['error.messages'],
                        'error'
                    )
                });
            e.target.reset()
        }
    }


    useEffect(() => {
        ScrollReveal().reveal('.contact', {
            duration: 2000,
            origin: 'top',
            distance: '-100px'
        })
    })
    return (
        <section className="page-section" id="contact">
            <div className="container contact px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">
                            <FormattedMessage
                                id='contact.title'
                                defaultMessage="No dudes en contactarme!"
                            />
                        </h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">
                            <FormattedMessage
                                id='contact.message'
                                defaultMessage="¿Listo para comenzar tu próximo proyecto? Enviame un mensaje y me pondré en contacto contigo lo antes posible."
                            />
                        </p>
                    </div>
                </div>
                <div className="contact row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">

                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={sendEmail}>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" name="name" type="text" placeholder="Ingrese su nombre..." data-sb-validations="required" onChange={handleOnChange} />
                                <label htmlFor="name">
                                    <FormattedMessage
                                        id='contact.labelName'
                                        defaultMessage="Nombre completo."
                                    />
                                </label>
                                <div className={`${errorName} invalid-feedback`} data-sb-feedback="name:required">
                                    <FormattedMessage
                                        id='contact.errorName'
                                        defaultMessage="*Se requiere un nombre."
                                    />
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" name="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" onChange={handleOnChange} />
                                <label htmlFor="email">
                                    <FormattedMessage
                                    id='contact.labelEmail'
                                    defaultMessage="Dirección de Email"
                                    />
                                </label>
                                <div className={`${errorEmail} invalid-feedback`} data-sb-feedback="email:required">
                                    <FormattedMessage
                                    id='contact.errorEmail'
                                    defaultMessage="*Se requiere un Email."
                                    />
                                </div>
                                <div className='invalid-feedback' data-sb-feedback="email:email">El Email no es válido.</div>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" name="phone" type="tel" placeholder="(555) 555-555" data-sb-validations="required" onChange={handleOnChange} />
                                <label htmlFor="phone">
                                    <FormattedMessage
                                    id='contact.labelPhone'
                                    defaultMessage="Numero de Teléfono"
                                    />
                                </label>
                                <div className={`${errorPhone} invalid-feedback`} data-sb-feedback="phone:required">
                                    <FormattedMessage
                                    id='contact.errorPhone'
                                    defaultMessage='*Se requiere un número de teléfono.'
                                    />
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" name="message" type="text" placeholder="Ingrese aquí su mensaje..." style={{ height: "10rem" }} data-sb-validations="required" onChange={handleOnChange}></textarea>
                                <label htmlFor="message">
                                    <FormattedMessage
                                    id='contact.messageLable'
                                    defaultMessage='Mensaje'
                                    />
                                </label>
                                <div className={`${errorMessage} invalid-feedback`}>
                                    <FormattedMessage
                                    id='contact.messageError'
                                    defaultMessage='*Se requiere un mensaje.'
                                    />
                                </div>
                            </div>

                            <div className={emailSuccess} id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder text-success"><h3>Envío de email exitoso!</h3></div>
                                </div>
                            </div>

                            <div className={emailError} id="submitErrorMessage"><div className="text-center text-danger mb-3">¡Error al enviar el mensaje!</div></div>

                            <div className="d-grid">
                                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
                                    <FormattedMessage
                                    id='contact.btn'
                                    defaultMessage='Enviar'
                                    />
                                </button>
                            </div>
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
