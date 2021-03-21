import React, { useState } from "react";

function Slides({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const mostrarAnterior = () => {
    let idx = activeIndex;

    if (idx === 0) return;
    idx--;

    setActiveIndex(idx);
  };

  const mostrarSiguiente = () => {
    let idx = activeIndex;

    if (idx === slides.length - 1) return;
    idx++;

    setActiveIndex(idx);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
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
