import { combineReducers } from 'redux';
import cardItemsReducer from '../reducers/cardItemsReducer';


const rootReducer = combineReducers({

    cardItems: cardItemsReducer,

});

export default rootReducer;