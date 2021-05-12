import {ADD_TO_CART,REMOVE_TO_CART} from '../constants/actionTypes'
// const initialState = {
//     cardData: null,
// }
const cardItemsStore = (secondaryState = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('reducer',action);
            return [
                ...secondaryState,
                {cardData: action.data}
            ]
        case REMOVE_TO_CART:
            secondaryState.pop();
            return [
                ...secondaryState,
            ]
        default:
            return secondaryState
    }
};

export default cardItemsStore;