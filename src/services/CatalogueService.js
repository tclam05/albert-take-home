import axios from "axios";
import { store } from "../index";
import { setCatalogueEntries } from "../actions/catalogue-actions";

const BASE_URL = "http://openlibrary.org/search.json?q=";

export default class CatalogueService {
  static loadCatalogueData(search, page) {
    axios.get(BASE_URL + search + "&page=" + (page + 1)).then(response => {
      store.dispatch(setCatalogueEntries(response.data));
    });
  }
}
