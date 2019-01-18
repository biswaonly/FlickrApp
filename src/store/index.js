import { createStore } from 'redux';
 
const initialState={
  groups : [],
  wide_search_bar : false
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case 'SEARCH_FOR_GROUP':
      return Object.assign({}, state, {groups: action.groups})

    case 'ADD_PHOTOS':
      return Object.assign({}, state, {...action.photos})

    case 'ADD_STL':
      return Object.assign({}, state, {...action.stl})

    case 'OPEN_SEARCH_BAR':
      return Object.assign({}, state, {wide_search_bar: !state.wide_search_bar})

    default:
      return state
  }
}

const store = createStore(reducer);

export default store;