import React, { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [articulos, setArticulos] = useState([]);

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

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={ordenarPorConMasVotos}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={ordenarPorFechaMasReciente}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articulos} />
    </div>
  );
}

export default App;
