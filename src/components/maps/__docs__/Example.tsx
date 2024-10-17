import React from "react";
import EasyMap from "../Map";
import { MapProvider } from "../MapProvider";
// import EasyMap from "./EasyMap"; // Importa o componente de mapa
// import { MapProvider } from "./MapProvider"; // Importa o provider para Google Maps

const Example: React.FC = () => {
  // Exemplo de coordenadas (latitude e longitude)
  const latitude = -23.55052; // Latitude de São Paulo, Brasil
  const longitude = -46.633308; // Longitude de São Paulo, Brasil
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Substitua pela sua chave da API do Google Maps

  return (
    <div>
      <h1>My Google Map Example</h1>
      <MapProvider api_key={apiKey}>
        <EasyMap lat={latitude} lon={longitude} />
      </MapProvider>
    </div>
  );
};

export default Example;
