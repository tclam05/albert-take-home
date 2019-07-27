import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CatalogueService from "../../services/CatalogueService";

export default class Search extends React.Component {
  handleSearch(e) {
    if (e.keyCode === 13) {
      CatalogueService.loadCatalogueData(e.target.value, this.props.page);
      this.props.setCatalogueSearch(e.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <InputBase
          placeholder="Search Library Catalogue"
          onKeyDown={e => {
            this.handleSearch(e);
          }}
          inputProps={{ "aria-label": "search library catalogue" }}
        />
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </React.Fragment>
    );
  }
}
