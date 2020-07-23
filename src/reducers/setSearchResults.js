import { FETCH_SEARCH_SUCCESS } from '../actions/index';

const setSearchResults = (state =  {searchResults: [] }, action) => {
    if (action.type === FETCH_SEARCH_SUCCESS) {
        return Object.assign({}, state, {
            searchResults: action.searchResults,
        });
    }
    return state;
};

export default setSearchResults;