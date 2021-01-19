
const initialState = {
    data: []
  }

const cartData = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_CART":
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case "REMOVE_CART_DATA": 
        return {
            ...state,
            data: state.data.filter( (item, index) => item.code !== action.payload.code)
        }
        default:
            return state
    }
}

export default cartData;
