import * as ActionTypes from './actions';

export const AddToCart = (itemToBeAdded) => {
    return {
        type: ActionTypes.Add_Item_ToCart,
        itemToBeAdded: itemToBeAdded
    }
}
export const RemoveFromCartSynch = (id) => {
    return {
        type: ActionTypes.Remove_Item_FromCart,
        id: id
    }
}
export const RemoveFromCart = (id) => {
    //middleware comes in and we can modify action before it reaches reducer
    //this will be executed by middleware
    return (dispatch,getState) => {
        console.log('actioncreater',getState());
        setTimeout(() => {
            dispatch(RemoveFromCartSynch(id));
        }, 2000)
    }
}