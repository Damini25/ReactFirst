//Action Types;
export const Add_Item_ToCart='Add_Item_ToCart';
export const Remove_Item_FromCart='Remove_Item_FromCart';


export const AddToCart=()=>{
    return {
        type:Add_Item_ToCart
    }
}