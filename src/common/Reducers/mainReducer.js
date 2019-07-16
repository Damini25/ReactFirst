import { Add_Item_ToCart, Remove_Item_FromCart } from './actions';
const initialState = {
    itemsInCart: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Item_ToCart:
            return Object.assign({}, state, { 'itemsInCart': action.text });
        case Remove_Item_FromCart:
            return (state.itemsInCart.map((item) => {
                return item.index !== action.index;
            }));
        default:
            return state;
    }
}

export default rootReducer;