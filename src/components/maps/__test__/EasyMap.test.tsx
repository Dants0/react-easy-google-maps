import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import EasyMap from '../Map'; // Importa o EasyMap
import { MapProvider } from '../MapProvider'; // Importa o MapProvider

describe("EasyMap component", () => {
  it("should render the Google Map correctly", () => {
    render(
      <MapProvider api_key="API_KEY">
        <EasyMap lat={2} lon={2} />
      </MapProvider>
    );

    // Verifica se o Google Map está presente no documento
    const googleMap = screen.getByTestId("google-map");
    expect(googleMap).toBeInTheDocument();
  });

  it("should display error message if coordinates are missing", () => {
    render(
      <MapProvider api_key="your-google-maps-api-key">
        <EasyMap lat={null} lon={null} /> {/* Simula coordenadas faltando */}
      </MapProvider>
    );

    // Verifica se a mensagem de erro é exibida
    const errorMessage = screen.getByText("Coordinates are not available");
    expect(errorMessage).toBeInTheDocument();
  });
});
