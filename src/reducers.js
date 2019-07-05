import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_SUCCESS, REQUEST_ROBOT_FAILED} from './constants';


const initialSearchState = {
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

export const searchRobots = (state=initialSearchState, action={}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField : action.payload});

    default :
        return state;
    }
}

const intialRobotState = {
    robots : [],
    isPending : false,
    error : '',
}

export const requestRobots = (state=intialRobotState, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOT_PENDING:
            return Object.assign({}, state, {isPending : true});
        case REQUEST_ROBOT_SUCCESS:
            return Object.assign({}, state, {robots : action.payload, isPending : false});
        case REQUEST_ROBOT_FAILED:
            return Object.assign({}, state, {error : action.payload, isPending : false});
        default:
            return state;
    }
}