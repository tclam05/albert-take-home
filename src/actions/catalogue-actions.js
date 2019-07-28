export const SET_CATALOGUE_ENTRIES = "SET_CATALOGUE_ENTRIES";
export const setCatalogueEntries = entries => ({
  type: SET_CATALOGUE_ENTRIES,
  entries
});

export const SET_CATALOGUE_PAGE = "SET_CATALOGUE_PAGE";
export const setCataloguePage = page => ({
  type: SET_CATALOGUE_PAGE,
  page
});

export const SET_CATALOGUE_SEARCH = "SET_CATALOGUE_SEARCH";
export const setCatalogueSearch = search => ({
  type: SET_CATALOGUE_SEARCH,
  search
});

export const SET_CATALOGUE_QUERY_PARAM = "SET_CATALOGUE_QUERY_PARAM";
export const setCatalogueQueryParam = queryParam => ({
  type: SET_CATALOGUE_QUERY_PARAM,
  queryParam
});
