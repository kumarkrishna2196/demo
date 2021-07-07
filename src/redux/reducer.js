const initialState={};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return state;
        break;
      case "FETCH_SUCCESS": 
      console.log('redu',state);
        return {...initialState, Data: action.payload};
        break;
      default:
        return state;
    }
  } 

