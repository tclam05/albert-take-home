import { connect } from "react-redux";
import CatalogueList from "./CatalogueList";
import { setCataloguePage } from "../../../actions/catalogue-actions";

const mapStateToProps = state => ({
  entries: state.catalogue.entries,
  page: state.catalogue.page,
  search: state.catalogue.search
});
const mapDispatchToProps = dispatch => ({
  setCataloguePage: page => {
    dispatch(setCataloguePage(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogueList);
