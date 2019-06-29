import {CHANGE_SEARCH_FIELD} from './constants';


/**
 *  Action name : setSearchField
 *  
 *  props       : text typed in searchField
 * 
 *  returns     : object containing type and payload.
 */

export const setSearchField = (text) => ({
    type : CHANGE_SEARCH_FIELD,
    payload : text,
});