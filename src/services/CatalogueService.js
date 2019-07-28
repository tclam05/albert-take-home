import axios from "axios";
import { store } from "../index";
import { setCatalogueEntries } from "../actions/catalogue-actions";

const BASE_URL = "http://openlibrary.org/search.json?";

export default class CatalogueService {
  static loadCatalogueData(search, page, queryParam = store.getState().catalogue.queryParam) {
    if (queryParam === "keyword") {
      queryParam = "q=";
    } else {
      queryParam += "=";
    }
    axios.get(BASE_URL + queryParam + search + "&page=" + (page + 1)).then(response => {
      store.dispatch(setCatalogueEntries(response.data));
    });
  }
}
