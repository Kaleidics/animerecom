import { combineReducers } from 'redux';

import setSearchResults from "./setSearchResults";

const rootReducer = combineReducers({
    searchResults: setSearchResults
});

export default rootReducer;