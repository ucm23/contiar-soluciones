import { useState, useRef } from 'react';
import { Formik } from 'formik'
import emailjs from '@emailjs/browser'
import { BiMailSend } from 'react-icons/bi'

const Formulario = () => {

	const form = useRef();

	const [formularioenviado, setformularioenviado] = useState(false);

	/*const sendEmail = () => {
		emailjs.sendForm('service_f8cxw7w', 'template_84xbcfa', form.current, '3TkCFtArpfX95oASO')
			.then(response => () => { })
			.catch(er => () => { })
	}*/

	const sendEmail = async (values) => {
		const status = false;
		try {
			let bodyR = JSON.stringify(values)
			let headersList = {
				"Accept": "*/*",
				"Content-Type": "application/json"
			}
			let response = await fetch(
				"https://backend-landing-pages.vercel.app/send-contact-email-contiar",
				//"http://localhost:3001/send-contact-email-contiar",
				{
					method: "POST",
					headers: headersList,
					body: bodyR
				}
			);
			let data = await response.text();
			console.log(data);

		} catch (error) {
			console.log("🚀 ~ sendEmail ~ error:", error)
		} finally {
			return status;
		}
	}


	return (
		<Formik
			initialValues={{
				nombre: '',
				correo: '',
				telefono: '',
				mensaje: ''
			}}

			validate={(valores) => {
				let errores = {};

				if (!valores.nombre) errores.nombre = 'Por favor ingresa un nombre';
				else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre))
					errores.nombre = 'El nombre solo puede contener letras y espacios';

				if (!valores.correo) errores.correo = 'Por favor ingresa un correo'
				else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo))
					errores.correo = 'El correo debe tener el sig. formato correo@correo.com';

				if (!valores.telefono) errores.telefono = 'Por favor ingresa un número de télefono';

				if (!valores.mensaje) errores.mensaje = 'Por favor ingresa un mensaje';

				return errores;
			}}

			onSubmit={(valores, { resetForm }) => {
				sendEmail({ ...valores });
				resetForm()
				setformularioenviado(true);
				setTimeout(() => {
					setformularioenviado(false)
				}, 10000)
			}}
		>
			{({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

				<form ref={form} className='formulario' onSubmit={handleSubmit}>
					<h1 className="titulo_mapa">Escríbenos</h1>
					<div>
						<label htmlFor='nombre'>Nombre: </label>
						<input
							type='text'
							id='nombre'
							name='nombre'
							placeholder='Nombre'
							autoComplete='off'
							value={values.nombre}
							onChange={handleChange}
							onBlur={handleBlur} />
					</div>
					{touched.nombre && errors.nombre && <div className='error'> {errors.nombre} </div>}

					<div className='footer-blocks'>
						<div className='correo-tel m-correo-tel'>
							<div>
								<label htmlFor='correo'>Correo: </label>
								<input
									type='text'
									id='correo'
									name='correo'
									autoComplete='off'
									placeholder='micorreo@mail.com'
									value={values.correo}
									onChange={handleChange}
									onBlur={handleBlur} />
							</div>
							{touched.correo && errors.correo && <div className='error'> {errors.correo} </div>}
						</div>
						<div className='correo-tel'>
							<div>
								<label htmlFor='telefono'>Teléfono: </label>
								<input
									type='tel'
									id='telefono'
									name='telefono'
									autoComplete='off'
									maxLength={10}
									value={values.telefono}
									onChange={handleChange}
									placeholder='9998887771'
									onBlur={handleBlur} />
							</div>
							{touched.telefono && errors.telefono && <div className='error'> {errors.telefono} </div>}
						</div>
					</div>

					<div>
						<label htmlFor='mensaje'>Mensaje: </label>
						<textarea
							type='tel'
							id='mensaje'
							name='mensaje'
							autoComplete='off'
							placeholder='Escribe un mensaje'
							value={values.mensaje}
							onChange={handleChange}
							onBlur={handleBlur}></textarea>
					</div>
					{touched.mensaje && errors.mensaje && <div className='error'> {errors.mensaje} </div>}

					<button className='btnContact' type='submit'><span>Enviar</span><BiMailSend className='sendMail' /> </button>
					{formularioenviado &&
						<p className='exito'>
							<strong>Formulario enviado con éxito</strong> <br />
							Hemos enviado un correo electrónico importante a tu bandeja de entrada. <br />
							Si no lo encuentras allí, por favor, <br />
							revisa tu carpeta de correo no deseado (spam) o la carpeta de promociones. <br />
							A veces, nuestros correos electrónicos pueden ser filtrados incorrectamente y terminar en estas carpetas.
						</p>}
				</form>

			)}
		</Formik>
	);
}

export default Formulario;