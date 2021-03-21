import { useEffect, useState } from "react";

export default function useOrdenarArticulos(articles) {
  const [articulos, setArticulos] = useState(articles);

  useEffect(() => {
    setArticulos(articles);
  }, [articles]);

  const ordenarPorConMasVotos = async () => {
    await setArticulos(null);
    const a = articulos.sort((a, b) => {
      if (a.upvotes < b.upvotes) return 1;
      else if (a.upvotes > b.upvotes) return -1;
      else return 0;
    });

    await setArticulos(a);
  };

  const ordenarPorFechaMasReciente = async () => {
    await setArticulos(null);
    const a = articulos.sort((a, b) => {
      if (a.date < b.date) return 1;
      else if (a.date > b.date) return -1;
      else return 0;
    });
    await setArticulos(a);
  };

  return { articulos, ordenarPorConMasVotos, ordenarPorFechaMasReciente };
}
