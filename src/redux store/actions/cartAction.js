import {ADD_TO_CART, REMOVE_TO_CART} from '../constants/actionTypes'
export function addToCart(data){
    // console.log('action',data);
    const action = {
        type: ADD_TO_CART,
        data: data,
    }
    return action;
}

export function removeToCart(){
    console.log('action');
    const action = {
        type: REMOVE_TO_CART,
       
    }
    return action;
}