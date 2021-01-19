
const initialState = {
    data: []
  }

const productData = (state = initialState, action) => {
    switch(action.type){
        case "SET_PRODUCT_DATA":
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

export default productData;