import { connect } from "react-redux";
import Search from "./Search";
import { setCatalogueSearch } from "../../actions/catalogue-actions";

const mapStateToProps = state => ({
  page: state.catalogue.page
});
const mapDispatchToProps = dispatch => ({
  setCatalogueSearch: search => {
    dispatch(setCatalogueSearch(search));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
