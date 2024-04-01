"strict mode"

import pages from '../../public/data/pages.json'
/*import {
    Button,
} from '@chakra-ui/react';
import { PiArrowRightThin } from "react-icons/pi";*/
import PropTypes from 'prop-types';
//import '../../assets/styles/section.styles.css'
import { ColorButton } from '../../lib/theme';
import { Stack } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

const Section = ({ index, showRegister }) => {

    const handleEnviarCorreo = async () => {
        try {
            //const response = await sendEmial()
            //console.log("🚀 ~ handleEnviarCorreo ~ response:", response)

            console.log("🚀 ~ handleEnviarCorreo ~ handleEnviarCorreo:")
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='section'>
            <div className="section-header">
                <h3 className="intro">{pages[index]?.name_}</h3>
                {/*<img src={`img/${pages[index]?.header?.suffix}/${pages[index]?.motivation?.img}`} loading="lazy" width="1148" alt="motivation-img" class="motivation-img" />*/}
                <h3 className="title">¿Listo para transformar tu experiencia?</h3>
                <h3 className="paragraph">Únete ahora y descubre un mundo de beneficios exclusivos que harán que cada momento cuente</h3>
                <div style={{ flexDirection: 'row' }}>
                    <ColorButton
                        disableElevation
                        //onClick={() => {}} 
                        onClick={() => showRegister()}
                        size='large'
                        variant="contained"
                        className='mx-auto mb-4 btn-standar'
                    //endIcon={<MdExpandMore className='ml-2' />}
                    >
                        Agenda tu llamada
                    </ColorButton>

                    {/*<Button
                        colorScheme="blue"
                        bg={'blue'}
                        rounded={4}
                        //top={5}
                        color="white"
                        leftIcon={<div />}
                        rightIcon={<PiArrowRightThin className='text-3xl' color="white" />}
                        _hover={{ bg: 'blue.500' }}
                        title='Redirigir a Contacto y Enviar Mensaje'
                        fontWeight={'300'}
                        onClick={() => showRegister()}
                    >
                        Enviar mensaje
    </Button>*/}
                </div>
                {/*<button onClick={handleEnviarCorreo}>Enviar Correo</button>*/}
            </div>
        </div>
    )
}

Section.propTypes = {
    index: PropTypes.string,
    showRegister: PropTypes.func,
};

export default Section;
