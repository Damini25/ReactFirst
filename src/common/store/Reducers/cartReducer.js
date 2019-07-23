import * as actionTypes from '../actions/actions';
const initialState = {
    itemsInCart: [],
    totalItems: 0
}
const CartReducer = (state = initialState, action) => {
    console.log("reducer state, Action", state, action);
    switch (action.type) {
        case actionTypes.Add_Item_ToCart:
            return {
                ...state,
                itemsInCart: state.itemsInCart.concat(action.itemToBeAdded),
                totalItems: state.totalItems + 1
            };

        case actionTypes.Remove_Item_FromCart:
            const newItemArray = state['itemsInCart'].filter((elem) => elem.id !== action.id
            );
            return { ...state, itemsInCart: newItemArray, totalItems: state.totalItems - 1 }

        default:
            return state;
    }
}

export default CartReducer;