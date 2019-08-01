import React from 'react';
import './productDetails.css';
import { connect } from 'react-redux';
import { addItemtoCart, removeItemFromCart } from '../../../../common/store/actions/actions';
import * as actionTypes from '../../../../common/store/actions/actionIndex';

class ProductDetails extends React.Component {
    
    render() {
        return (
            <div className="product-div">
                {this.props.productData['isFreeShipping'] ? <label>Free Shipping</label> : ""}
                <img src="./../../../../assets/images/shirt1.jpg"></img>
                <div>{this.props.productData['title']}</div>
                <div>{this.props.productData['description']}</div>
                <div>{this.props.productData['currencyFormat']} {this.props.productData['price']}</div>
                <button onClick={(e) => { this.props.onAddingItemToCart(this.props.productData) }}>Add To Cart</button>
            </div>);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddingItemToCart: (item) => dispatch(actionTypes.AddToCart(item))
    }
};
export default connect(null, mapDispatchToProps)(ProductDetails);