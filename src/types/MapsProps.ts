import { ReactNode } from "react";

export interface MapProviderProps {
  children: ReactNode,
  api_key: string
}

export interface MapComponentProps {
  lat: number | null | undefined;
  lon: number | null | undefined;
}
