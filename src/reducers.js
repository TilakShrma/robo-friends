import { CHANGE_SEARCH_FIELD } from './constants';


const initState = {
    searchField : '',
}

/**
 *  Reducer name : searchRobots
 *  
 *  Props : state and action
 * 
 *  using es6 we can initialize state with initState and action with an empty object.
 * 
 *  state is the current state of App and action is what to perform in that state.
 */

export const searchRobots = (state=initState, action={}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField : action.payload});

    default :
        return state;
    }
}