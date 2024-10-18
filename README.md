
# React Easy Map

React Easy Google Maps is a React component that facilitates integration with Google Maps. With this component, you can easily add a map to your React application by simply providing the coordinates (latitude and longitude) and a Google Maps API key, without more configuration.

## Install
To use the component in your project, install it via npm:
```
npm install react-easy-google-maps
```
Or, if you're using yarn:
```
yarn add react-easy-google-maps
```


## Use/Examples

```javascript
import React from 'react';
import { EasyMap, MapProvider } from 'react-easy-google-maps';

const MyComponent = () => {
  const apiKey = "SUA_GOOGLE_MAPS_API_KEY"; // Substitua pela sua chave de API
  const lat = -23.55052; // Exemplo de latitude
  const lon = -46.633308; // Exemplo de longitude

  return (
    <MapProvider api_key={apiKey}>
      <EasyMap lat={lat} lon={lon} />
    </MapProvider>
  );
};

export default MyComponent;

```


## Reference

 - [Google Maps API Docs](https://developers.google.com/maps/documentation?hl=pt-br)


## Documentation

[Documentação](https://link-da-documentação)


## Licença

[ISC](https://choosealicense.com/licenses/isc/)


## 🚀 About me
I'm developer

