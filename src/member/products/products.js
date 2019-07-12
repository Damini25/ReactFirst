import React from 'react';
import ProductDetails from './productList/productDetails';
import { fetchProducts } from './productsService';
import './products.css';

class MainProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: []
        };
    }
    componentDidMount() {
        this.getProductData();
    }

    getProductData = () => {
        fetchProducts().then((res) => {
            console.log('getProducts', res);
            if (res.data) {
                this.setState({
                    productData: res.data['products']
                })
            }
        })
    }

    render() {
        console.log('fffff', this.state.productData);
        const product = this.state.productData.map((element) => {
            return <div key={element.id}>
                    <ProductDetails productData={element}></ProductDetails>
                    
                </div>

            
        })
        return (
            <div className="products_list_main">
                {product}
            </div>
        );
    }
}
export default MainProductListing;