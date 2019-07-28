import React from "react";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import CatalogueService from "../../services/CatalogueService";
import "./Search.scss";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownValues = ["keyword", "title", "author"];
  }

  // search for results when user presses Enter
  handleSearch(e) {
    if (e.keyCode === 13) {
      CatalogueService.loadCatalogueData(e.target.value, 0, this.props.queryParam);
      this.props.setCataloguePage(0);
      this.props.setCatalogueSearch(e.target.value);
    }
  }

  handleDropdownChange(option) {
    this.props.setCatalogueQueryParam(option.props.value);
  }

  render() {
    return (
      <React.Fragment>
        <Select
          className="searchDropdown"
          value={this.props.queryParam}
          onChange={(event, option) => {
            this.handleDropdownChange(option);
          }}
          input={<OutlinedInput />}
          SelectDisplayProps={{ style: { padding: "10px 24px 10px 10px" } }}
        >
          <MenuItem value={this.dropdownValues[0]}>Keyword</MenuItem>
          <MenuItem value={this.dropdownValues[1]}>Title</MenuItem>
          <MenuItem value={this.dropdownValues[2]}>Author</MenuItem>
        </Select>
        <InputBase
          className="searchInput"
          placeholder="Search Catalogue"
          onKeyDown={e => {
            this.handleSearch(e);
          }}
          inputProps={{ style: { margin: "0px 4px" } }}
        />
      </React.Fragment>
    );
  }
}
