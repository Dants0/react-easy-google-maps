import { MapComponentProps } from "../../types/MapsProps";
import { GoogleMap, Marker } from '@react-google-maps/api';
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
};

const EasyMap: React.FC<MapComponentProps> = ({ lat, lon }) => {
  if (!lat || !lon) {
    return <p>Coordinates are not available</p>;
  }

  const defaultMapCenter = {
    lat: lat,
    lng: lon,
  };

  return (
    <MapContainer>
      <GoogleMap
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={{ lat: lat, lng: lon }} />
      </GoogleMap>
    </MapContainer>
  );
};

export default EasyMap;
