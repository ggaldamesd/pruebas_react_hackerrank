import React from "react";
import useSlide from "../hooks/useSlide";

function Slides({ slides }) {
  const { activeIndex, resetear, mostrarAnterior, mostrarSiguiente } = useSlide(
    slides
  );

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={activeIndex === 0}
          onClick={resetear}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={activeIndex === 0}
          onClick={mostrarAnterior}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={activeIndex === slides.length - 1}
          onClick={mostrarSiguiente}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[activeIndex].title}</h1>
        <p data-testid="text">{slides[activeIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;
