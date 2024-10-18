import { MapComponentProps } from "../../types/MapsProps";
import { GoogleMap, Marker } from '@react-google-maps/api';

const EasyMap: React.FC<MapComponentProps> = ({ lat, lon }) => {
  if (!lat || !lon) {
    return <p>Coordinates are not available</p>;
  }

  const defaultMapZoom = 18;

  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
  };

  const defaultMapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "5px",
  };


  const defaultMapCenter = {
    lat: lat,
    lng: lon,
  };

  return (
    <GoogleMap
      mapContainerStyle={defaultMapContainerStyle}
      center={defaultMapCenter}
      zoom={defaultMapZoom}
      options={defaultMapOptions}
    >
      <Marker position={defaultMapCenter} />
    </GoogleMap>
  );
};

export default EasyMap;
