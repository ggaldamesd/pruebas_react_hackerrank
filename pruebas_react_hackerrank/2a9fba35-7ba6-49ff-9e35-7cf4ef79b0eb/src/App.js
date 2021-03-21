import React from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";
import useOrdenarArticulos from "./hooks/useOrdenarArticulos";

const title = "Sorting Articles";

function App({ articles }) {
  const {
    articulos,
    ordenarPorConMasVotos,
    ordenarPorFechaMasReciente,
  } = useOrdenarArticulos(articles);

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
