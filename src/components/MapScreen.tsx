
import  { Place } from '../api/Place';
import 'leaflet/dist/leaflet.css'
import { Map as LeafletMap } from 'leaflet'
import { useEffect,useRef } from 'react';
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
interface MapProps {
  place: Place | null;
}
export default function MapScreen({ place }: MapProps) {
    if (!place) return <p>No place selected</p>;

  const mapRef = useRef<LeafletMap | null>(null);
  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude], mapRef.current.getZoom(), {duration: 1.5});
    }
  }, [place])
  // Ensure latitude and longitude are valid numbers
  const latitude = parseFloat(place.latitude.toString());
  const longitude = parseFloat(place.longitude.toString());
  const position: [number, number] = [latitude, longitude];

  return (
          <MapContainer ref={mapRef} center={position} scrollWheelZoom  zoom={12} style={{ width: '100%'}} className='h-full'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {place &&  <Marker position={position}>
          <Popup>
            {place.name}
          </Popup>
        </Marker>}
        
      </MapContainer>
  )
}
