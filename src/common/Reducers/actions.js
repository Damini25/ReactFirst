//Action Types;
const Add_Item_ToCart='Add_Item';
const Remove_Item_FromCart='Remove_Item';

//Action creators to return actions
function addItemtoCart(text){
    return{
        type:Add_Item_ToCart,text
    }
}

function removeItemFromCart(index){
    return{
        type:Remove_Item_FromCart,index
    }
}