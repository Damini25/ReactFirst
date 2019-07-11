import React from 'react';
import ProductDetails from './productList/productDetails';
import { fetchProducts } from './productsService';

class MainProductListing extends React.Component {
    componentDidMount(){
        this.getProductData();
    }

    getProductData() {
        fetchProducts().then((res) => {
            console.log('getProducts', res);
            if (res.data.success) {
            }
        })
    }
    
    render() {
        <div>
            <ProductDetails></ProductDetails>
        </div>
    }
}
export default MainProductListing;