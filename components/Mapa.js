import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [25.69098374905742, -100.37824879374838];
const center = [25.69098374905742, -100.37824879374838];

const Mapa = () => {
    return (
        <MapContainer
            center={center}
            zoom={17}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Aquí nos puedes encontrar
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Mapa