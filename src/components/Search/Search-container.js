import { connect } from "react-redux";
import Search from "./Search";
import { setCatalogueSearch, setCatalogueQueryParam, setCataloguePage } from "../../actions/catalogue-actions";

const mapStateToProps = state => ({
  page: state.catalogue.page,
  queryParam: state.catalogue.queryParam
});
const mapDispatchToProps = dispatch => ({
  setCatalogueSearch: search => {
    dispatch(setCatalogueSearch(search));
  },
  setCatalogueQueryParam: queryParam => {
    dispatch(setCatalogueQueryParam(queryParam));
  },
  setCataloguePage: page => {
    dispatch(setCataloguePage(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
