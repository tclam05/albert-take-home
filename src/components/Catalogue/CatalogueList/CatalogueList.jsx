import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import CatalogueService from "../../../services/CatalogueService";
import "./CatalogueList.scss";

export default class CatalogueList extends React.Component {
  state = {
    rowsPerPage: 25
  };

  getCatalogueIndex(pageNum) {
    let catalogueIndexArray = [];
    for (let i = 0; i < Math.ceil(this.props.entries.docs.length / this.state.rowsPerPage) - 1; i++) {
      catalogueIndexArray.push(this.state.rowsPerPage * (i + 1));
    }
    let index = 0;
    for (let i = 0; i < pageNum; i++) {
      index = catalogueIndexArray[i % catalogueIndexArray.length];
    }
    if (!index) {
      return 0;
    }
    return index;
  }

  handleChangePage(event, newPage) {
    this.props.setCataloguePage(newPage);
    let page = Math.floor(newPage / Math.ceil(this.props.entries.docs.length / this.state.rowsPerPage));
    CatalogueService.loadCatalogueData(this.props.search, page);
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: parseInt(event.target.value) });
    this.props.setCataloguePage(0);
    CatalogueService.loadCatalogueData(this.props.search, 0);
  }

  TablePaginationActions(props) {
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event) {
      onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
      onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
      onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
      <div className="paginationArrowsContainer">
        <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0}>
          <FirstPageIcon />
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
          <KeyboardArrowRight />
        </IconButton>
        <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
          <LastPageIcon />
        </IconButton>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.entries.docs && (
          <Table className="CatalogueList">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.entries.docs
                .slice(
                  this.getCatalogueIndex(this.props.page),
                  this.getCatalogueIndex(this.props.page) + this.state.rowsPerPage
                )
                .map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.title}</TableCell>
                    <TableCell>{entry.author_name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[25, 50, 100]}
                  colSpan={2}
                  count={this.props.entries.numFound}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.props.page}
                  onChangePage={(event, page) => {
                    this.handleChangePage(event, page);
                  }}
                  onChangeRowsPerPage={event => {
                    this.handleChangeRowsPerPage(event);
                  }}
                  ActionsComponent={this.TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </React.Fragment>
    );
  }
}
