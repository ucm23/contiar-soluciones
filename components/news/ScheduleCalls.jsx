"use strict"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { Formik, Field, Form, } from 'formik';
import * as Yup from 'yup';
import { ColorButton } from '../../lib/theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 1000,
    height: 500,
    bgcolor: 'background.paper',
    border: '0.5px solid gray',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Escriba su nombre completo'),
    apellidos: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Escriba su nombre completo'),
    phone: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Campo requerido'),
});

const sendEmail = async (values) => {
    console.log("🚀 ~ sendEmail ~ values:", values)
    try {
        /*let headersList = {
            "Accept": "* /*"
        }

        let response = await fetch(
            //"https://backend-landing-pages.vercel.app/send-email",
            "http://localhost:3001/send-email",
            {
                method: "POST",
                headers: headersList
            });

        let data = await response.text();
        console.log(data);*/

        let bodyR = JSON.stringify(values)

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let response = await fetch("http://localhost:3001/send-email", {
            method: "POST",
            headers: headersList,
            body: bodyR
            //data: bodyR
        });

        let data = await response.text();
        console.log(data);

    } catch (error) {
        console.log("🚀 ~ sendEmail ~ error:", error)
    }
}


export default function ScheduleCalls(props) {
    return (
        <Modal
            open={props?.show}
            onClose={props?.onHide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='class-container'>
                <div className='calls'>
                    <div className='calls-statics'>
                        <img
                            src='logo.png'
                            style={{ width: 50 }}
                            className='icon-forms'
                            alt={'icon-forms-logo.png'}
                        />
                        <p className='strong-0'>
                            Agendar una llamada y obtén una sesión con un especialista
                        </p>
                        <p className='font-gray'>⏱️ 30 minutos <br />🎥 Recibirás un documento vía email, además nuestro asesor analizará tus objetivos y te ayudará a entender los requerimientos necesarios.</p>
                        <p className='font-gray'>
                            Esta es tu oportunidad de tener una llamada o zoom-call,
                            sin compromiso, antes de contratar el servicio.
                            Contamos con los mejores especialistas que te ayudarán a aclarar tus dudas y entender mejor tus necesidades.
                        </p>
                        <p className='font-gray'>Gracias de antemano.</p>
                    </div>

                    <div className='forms'>
                        <Formik
                            validationSchema={SignupSchema}
                            validateOnMount={true}
                            initialValues={{
                                name: '',
                                apellidos: '',
                                phone: '',
                                email: ''
                            }}
                            onSubmit={(values) => {
                                //console.log("🚀 ~ ScheduleCalls ~ values:", values)
                                //setTimeout(() => {
                                //alert(JSON.stringify(values, null, 2));
                                //showRegister()
                                //}, 500);
                                sendEmail(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="form-flex-row">
                                    <p className='strong'>Información personal</p>
                                    <p className='small'>Déje sus datos y en breve nos contactaremos contigo</p>
                                    <div className="row-column">
                                        <Field
                                            id="name"
                                            name="name"
                                            placeholder="Nombre(s)*"
                                            type="text"
                                            className="input-email"
                                        />
                                        <Field
                                            id="apellidos"
                                            name="apellidos"
                                            placeholder="Apellido(s)*"
                                            type="text"
                                            className="input-email"
                                        />
                                    </div>

                                    {((errors.name && touched.name) || (errors.apellidos && touched.apellidos)) &&
                                        <p className='error-form'> ⚠️ {errors.name || errors.apellidos}</p>}

                                    <Field
                                        id="phone"
                                        name="phone"
                                        placeholder="Telefono*"
                                        type="text"
                                        className="input-email"
                                    />
                                    {errors.phone && touched.phone &&
                                        <p className='error-form'> ⚠️ {errors.phone}</p>}

                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="Correo electrónico*"
                                        type="email"
                                        className="input-email"
                                    />
                                    {errors.email && touched.email &&
                                        <p className='error-form'> ⚠️ {errors.email}</p>}

                                    <div className="flex-end">
                                        <ColorButton
                                            disableElevation
                                            //onClick={() => {}} 
                                            //onClick={() => showRegister()}
                                            size='large'
                                            variant="contained"
                                            className='mx-auto mb-4 btn-standar'
                                            type='submit'
                                        //endIcon={<MdExpandMore className='ml-2' />}
                                        >
                                            Siguiente
                                        </ColorButton>
                                    </div>


                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>
            </Box>
        </Modal>
    );
}

ScheduleCalls.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
}