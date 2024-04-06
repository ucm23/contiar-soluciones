"use strict"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 1000,
    height: '80%',
    maxHeight: 1000,
    bgcolor: 'background.paper',
    border: '0.5px solid gray',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

export default function ReadDocs(props) {
    return (
        <Modal
            open={props?.show}
            onClose={props?.onHide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='class-container'>
                <embed
                    src={`/docs/CONTIAR-SOLUCIONES-ITS-2024.pdf#navpanes=0`}
                    type="application/pdf"
                    width='100%'
                    height='100%'
                />
            </Box>
        </Modal>
    );
}

ReadDocs.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
}