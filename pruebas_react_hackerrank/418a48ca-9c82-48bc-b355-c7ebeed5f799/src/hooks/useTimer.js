import { useState, useRef, useEffect } from "react";

export default function useTimer(catalogo) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(false);
  const [slideDuration] = useState(3000);
  let timer = useRef();

  const mostrarAnterior = () => {
    if (activeIndex === 0) setActiveIndex(catalogo.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const mostrarSiguiente = () => {
    if (activeIndex === catalogo.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const seleccionar = (idx) => {
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (slideTimer) {
      timer.current = setInterval(() => {
        if (activeIndex === catalogo.length - 1) setActiveIndex(0);
        else setActiveIndex(activeIndex + 1);
      }, slideDuration);
    }
  }, [slideTimer, slideDuration, activeIndex, catalogo.length]);

  const alternar = (e) => {
    setSlideTimer(e.target.checked);
  };

  return {
    alternar,
    seleccionar,
    mostrarAnterior,
    mostrarSiguiente,
    activeIndex,
  };
}
