import { API_SEARCH_URL } from '../config';

export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const fetchSearchSuccess = searchResults => ({
  type: FETCH_SEARCH_SUCCESS,
  searchResults
});

export const fetchSearch = (parameters) => dispatch => {
  const url = API_SEARCH_URL + parameters;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(searchResults => {
      dispatch(fetchSearchSuccess(searchResults));
    })
  .catch(err => console.log(err));
}