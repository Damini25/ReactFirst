import React from 'react';
import './productDetails.css';
import { connect } from 'react-redux';
import { addItemtoCart, removeItemFromCart } from '../../../common/Reducers/actions';

class ProductDetails extends React.Component {
    addtoCart(data) {
        dispatch(addItemtoCart(data['title']));
    }
    render() {
        return (
            <div className="product-div">
                {this.props.productData['isFreeShipping'] ? <label>Free Shipping</label> : ""}

                <img src="./../../../../assets/images/shirt1.jpg"></img>
                <div>{this.props.productData['title']}</div>
                <div>{this.props.productData['description']}</div>
                <div>{this.props.productData['currencyFormat']} {this.props.productData['price']}</div>
                <button onClick={(e) => { this.addtoCart(e,this.props.productData) }}>Add To Cart</button>
            </div>);
    }
}
const ProductDetails = connect()(ProductDetails);
export default ProductDetails;