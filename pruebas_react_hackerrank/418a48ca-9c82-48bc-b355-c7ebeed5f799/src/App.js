import React, { Fragment, useState } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer } from "./components";
import useTimer from "./hooks/useTimer";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);

  const {
    alternar,
    seleccionar,
    mostrarAnterior,
    mostrarSiguiente,
    activeIndex,
  } = useTimer(catalogs);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={mostrarAnterior}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                alSeleccionar={(e) => {
                  seleccionar(e);
                }}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={mostrarSiguiente}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            id="cbToggle"
            type="checkbox"
            data-testid="toggle-slide-show-button"
            onChange={alternar}
          />
          <label htmlFor="cbToggle" className="ml-6">
            Start Slide Show
          </label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
