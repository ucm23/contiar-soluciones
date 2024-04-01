import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import { MdExpandMore } from 'react-icons/md'
import { Stack } from '@mui/material';
import { ColorButton } from '../lib/theme';
import Icon from '@mui/material/Icon'
import { useRouter } from 'next/router'
import { Fade } from "react-awesome-reveal";

//import { security, devices, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine, } from "react-icons/ri";
//const icons_ = [RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine,]


const Service = ({titulo, descrip, icono}) => {
    const { push } = useRouter();

    const handleClick = () => push('/Soluciones');
    
    return (
        <Fade direction="right">
            <Card sx={{ minWidth: 275, maxWidth: 275 }} className='card-margen'>
                <CardContent>
                    <div className='d-flex'>
                        <Icon className='icono-servicios'>{icono}</Icon>
                    </div>

                    <Typography className='mtb-5' variant="h5" component="div" textAlign={'center'}>
                        {titulo} {icono}
                    </Typography>
                    <Typography variant="body2">
                        {descrip}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack spacing={3} direction="row" className='mx-auto mb-4'>
                        <ColorButton onClick={ handleClick } variant="contained" endIcon={<MdExpandMore className='ml-2' />}>Leer Más</ColorButton>
                    </Stack>
                </CardActions>
            </Card>
        </Fade>
    )
}

export default Service