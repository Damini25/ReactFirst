import React from 'react';
import './productDetails.css';

class ProductDetails extends React.Component {
    render() {
        return (
            <div className="product-div">
                {this.props.productData['isFreeShipping'] ? <label>Free Shipping</label> : ""}

                <img src="./../../../../assets/images/shirt1.jpg"></img>
                <div>{this.props.productData['title']}</div>
                <div>{this.props.productData['description']}</div>
                <div>{this.props.productData['currencyFormat']} {this.props.productData['price']}</div>
                <button>Add To Cart</button>
            </div>);
    }
}
export default ProductDetails;