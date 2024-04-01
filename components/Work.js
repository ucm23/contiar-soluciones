import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ColorButton } from '../lib/theme';
import { Stack } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';
import { useRouter } from 'next/router'
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';

const Work = ({titulo, src, alt}) => {
    const { push } = useRouter();

    const handleClick = () => push('/Soluciones');

    return (
        <Fade direction="left">
            <Card sx={{ minWidth: 435, maxWidth: 435  }} className='card-margenWork'>
                <div className='overhid heightImage'>
                    <Image
                        height={250}
                        width={435}
                        src={src}
                        alt={alt}
                        objectFit= "cover"
                        className='card-img-top'
                    />
                </div>
                <CardContent className='d-flex'>
                    <Typography gutterBottom variant="h5" component="div" className='m-auto font-work'>
                        {titulo}
                    </Typography>
                </CardContent>
                <CardActions className='pt-0'>
                    <Stack spacing={3} direction="row" className='mx-auto mb-4'>
                        <ColorButton 
                            onClick={handleClick} 
                            variant="contained" 
                            endIcon={<MdExpandMore className='ml-2' />}
                        >Leer Más</ColorButton>
                    </Stack>
                </CardActions>
            </Card>
        </Fade>
    )
}

export default Work