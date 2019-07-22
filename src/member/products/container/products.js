import React from 'react';
import ProductDetails from './productList/productDetails';
import { fetchProducts } from '../productsService';
import SizeFilter from './filter/sizeFilter/sizeFilter';
import CartComponent from './cart/cart';
import './products.css';
import { Link } from 'react-router-dom';

class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: []
        };
    }
    componentDidMount() {
        this.getProductData();
    }

    // componentDidUpdate(){
    //     this.getProductData();
    // }

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
                <Link to={{ pathname: '/member/product/' + element.id }}>
                    <ProductDetails productData={element}>
                    </ProductDetails>
                </Link>
            </div>


        })
        return (
            <div className="products_list">
                {product}
            </div>
        );
    }
}
export default ProductListing;