import React from "react";
import "typeface-roboto";
import Search from "./components/Search/Search-container";
import CatalogueList from "./components/Catalogue/CatalogueList/CatalogueList-container";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title">Search the Catalogue</div>
        <div className="searchContainer">
          <Search />
        </div>
        <CatalogueList />
      </div>
    </div>
  );
}

export default App;
