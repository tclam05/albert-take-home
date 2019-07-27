import React from "react";
import "typeface-roboto";
import Search from "./components/Search/Search-container";
import CatalogueList from "./components/Catalogue/CatalogueList/CatalogueList-container";
import "./App.css";

function App() {
  return (
    <div>
      <Search />
      <CatalogueList />
    </div>
  );
}

export default App;
