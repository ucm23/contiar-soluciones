import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#f1600c'),
    backgroundColor: '#f1600c',
    /*fontFamily: 'Roboto',*/
    '&:hover': {
        backgroundColor: '#D8560A',
    },
}));