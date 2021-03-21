import { useState } from "react";

export default function useSlide(slides) {
  const [activeIndex, setActiveIndex] = useState(0);

  const resetear = () => {
    setActiveIndex(0);
  };

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

  return { mostrarAnterior, mostrarSiguiente, resetear, activeIndex };
}
