/* eslint-disable react/style-prop-object */
import React from "react";
// import Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import LogoImage from "../static/images/logo-black.svg";
import { Map, TileLayer } from "react-leaflet";
import designTokens from "../config/designTokens";

function UniversityMap() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
        }}
      >
        <aside
          style={{
            width: "320px",
            background: `${designTokens.colors.grey800}`,
            padding: "80px",
            opacity: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <header>
            <img src={LogoImage} width="60px" alt="logo bike" />
            <h2 className="text-gray-700">Selecione a estação que desejar</h2>
            <p className="text-gray-700">
              Procure as estações que você queira retirar ou depositar sua bike
              :)
            </p>
          </header>
          <footer>
            <strong>Springfield</strong>
            <span>Oregon</span>
          </footer>
        </aside>
        <Map
          center={[-23.644495, -46.528175]}
          zoom={17}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>
      </div>
    </>
  );
}

export default UniversityMap;
