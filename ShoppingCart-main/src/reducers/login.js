const initialState = {
    login: {
        username: '',
        password: ''
    }
  }

  export default (state = initialState, action) => {
    switch(action.type){
    case 1:
        return {
            ...state
        }
    default:
        return state;
    }
  }