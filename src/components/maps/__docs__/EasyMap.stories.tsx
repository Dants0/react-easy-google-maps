import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import EasyMap from "../Map";
import { MapProvider } from "../MapProvider";

const meta: Meta<typeof EasyMap> = {
  title: "Components/EasyMap",
  component: EasyMap,
};

export default meta;
type Story = StoryObj<typeof EasyMap>;

// Adicione sua chave da API do Google Maps aqui
const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; 

export const Default: Story = {
  render: () => (
    <MapProvider api_key={apiKey}>
      <EasyMap lat={-23.55052} lon={-46.633308} /> {/* Coordenadas de São Paulo */}
    </MapProvider>
  ),
};

export const NewYork: Story = {
  render: () => (
    <MapProvider api_key={apiKey}>
      <EasyMap lat={40.712776} lon={-74.005974} /> {/* Coordenadas de Nova Iorque */}
    </MapProvider>
  ),
};

export const Tokyo: Story = {
  render: () => (
    <MapProvider api_key={apiKey}>
      <EasyMap lat={35.6762} lon={139.6503} /> {/* Coordenadas de Tóquio */}
    </MapProvider>
  ),
};
