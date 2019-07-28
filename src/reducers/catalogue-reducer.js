import {
  SET_CATALOGUE_ENTRIES,
  SET_CATALOGUE_PAGE,
  SET_CATALOGUE_SEARCH,
  SET_CATALOGUE_QUERY_PARAM
} from "../actions/catalogue-actions";
const initialState = {
  entries: [],
  page: 0,
  search: "",
  queryParam: "keyword"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CATALOGUE_ENTRIES:
      return Object.assign({}, state, { entries: action.entries });
    case SET_CATALOGUE_PAGE:
      return Object.assign({}, state, { page: action.page });
    case SET_CATALOGUE_SEARCH:
      return Object.assign({}, state, { search: action.search });
    case SET_CATALOGUE_QUERY_PARAM:
      return Object.assign({}, state, { queryParam: action.queryParam });
    default:
      return state;
  }
}
