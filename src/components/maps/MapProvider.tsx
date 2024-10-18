import { MapProviderProps } from "../../types/MapsProps";
import { libraries } from "../../lib/libraries";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

export function MapProvider({ children, api_key  }: MapProviderProps) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: api_key as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return <>{children}</>;
}