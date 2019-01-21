import { createStore } from 'redux';
 
const initialState={
  groups : [],
  wide_search_bar : false,
  redirect : false,
  groupInfo : [],
  group_images : [],
  last_data : undefined
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

    case 'ADD_IMAGES':
      return Object.assign({}, state, {group_images : action.pass})
    
    case 'ADD_SINGLE_GROUP':
    console.log("came to single group" , action.pass )
      return Object.assign({}, state, {singledata : action.pass})

    default:
      return state
  }
}

const store = createStore(reducer);

export default store;