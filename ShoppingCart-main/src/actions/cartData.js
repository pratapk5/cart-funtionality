export const updateCart=(cartData)=>{
    return {
        type: 'UPDATE_CART',
        payload: cartData
    }
}

export const removeProductFromCart=(data)=>{
    return {
        type: 'REMOVE_CART_DATA',
        payload: data
    }
}