import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CatalogueService from "../../../services/CatalogueService";

export default class CatalogueList extends React.Component {
  handleChangePage(event, newPage) {
    this.props.setCataloguePage(newPage);
    CatalogueService.loadCatalogueData(this.props.search, newPage);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.entries.docs && (
          <Table className="CatalogueList">
            <TableBody>
              {this.props.entries.docs.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.title}</TableCell>
                  <TableCell>{entry.author_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={2}
                  count={this.props.entries.numFound}
                  rowsPerPage={100}
                  page={this.props.page}
                  onChangePage={(event, page) => {
                    this.handleChangePage(event, page);
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </React.Fragment>
    );
  }
}
