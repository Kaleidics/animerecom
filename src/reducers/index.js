import { FETCH_SEARCH_SUCCESS } from '../actions';

const initialState = {
  searchHistory: [],
  searchResults: []
};

export const Reducer = (state = initialState, action) => {
    if (action.type === FETCH_SEARCH_SUCCESS) {
        return Object.assign({}, state, {
            searchResults: action.searchResults
        });
    }

    return state;
};
