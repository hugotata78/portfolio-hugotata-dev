import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import ScrollReveal from 'scrollreveal'
import { DataContext } from '../context/DataProvider'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'
require('dotenv').config()

const Contact = () => {


    const service_id = process.env.REACT_APP_SERVICE_ID
    const user_id = process.env.REACT_APP_USER_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    const value = useContext(DataContext)
    const [messages] = value.messages
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    

    const sendEmail = (data,e)=> {
        console.log(data)
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

        reset()
   
        //e.target.reset()

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

                        <form
                            id="contactForm"
                            data-sb-form-api-token="API_TOKEN"
                            onSubmit={handleSubmit(sendEmail)}
                        >

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Ingrese su nombre..."
                                    data-sb-validations="required"
                                    {...register('name', {
                                        required: true
                                    })}
                                />
                                <label htmlFor="name">
                                    <FormattedMessage
                                        id='contact.labelName'
                                        defaultMessage="Nombre completo."
                                    />
                                </label>
                                <div
                                    className="text-danger"
                                    data-sb-feedback="name:required"
                                >
                                    {
                                        errors.name && <FormattedMessage
                                            id='contact.errorName'
                                            defaultMessage="*Se requiere un nombre."
                                        />
                                    }
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    data-sb-validations="required"
                                    {...register('email', {
                                        required: true,

                                    })}
                                />
                                <label htmlFor="email">
                                    <FormattedMessage
                                        id='contact.labelEmail'
                                        defaultMessage="Dirección de Email"
                                    />
                                </label>
                                <div
                                    className="text-danger"
                                    data-sb-feedback="email:required"
                                >
                                    {
                                        errors.email && <FormattedMessage
                                            id='contact.errorEmail'
                                            defaultMessage="*Se requiere un Email"
                                        />
                                    }
                                </div>

                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="(555) 555-555"
                                    data-sb-validations="required"
                                    {...register('phone', {
                                        required: true
                                    })}
                                />
                                <label htmlFor="phone">
                                    <FormattedMessage
                                        id='contact.labelPhone'
                                        defaultMessage="Numero de Teléfono"
                                    />
                                </label>
                                <div
                                    className="text-danger"
                                    data-sb-feedback="phone:required"
                                >
                                    {
                                        errors.phone && <FormattedMessage
                                            id='contact.errorPhone'
                                            defaultMessage="*Se requiere un número de teléfono."
                                        />
                                    }
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    type="text"
                                    placeholder="Ingrese aquí su mensaje..."
                                    style={{ height: "10rem" }}
                                    data-sb-validations="required"
                                    {...register('message', {
                                        required: true
                                    })}
                                >

                                </textarea>
                                <label htmlFor="message">
                                    <FormattedMessage
                                        id='contact.messageLable'
                                        defaultMessage='Mensaje'
                                    />
                                </label>
                                <div
                                    className="text-danger"
                                    data-sb-feedback="message:required"
                                >
                                    {
                                        errors.message && <FormattedMessage
                                            id='contact.messageError'
                                            defaultMessage="*Se requiere un mensaje."
                                        />
                                    }
                                </div>
                            </div>

                            {/* <div
                                className={emailSuccess}
                                id="submitSuccessMessage"
                            >
                                <div className="text-center mb-3">
                                    <div className="fw-bolder text-success">
                                        <h3>
                                            Envío de email exitoso!
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className={emailError} id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">
                                    ¡Error al enviar el mensaje!
                                </div>
                            </div> */}

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
