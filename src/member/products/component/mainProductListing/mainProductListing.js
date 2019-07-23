import React from 'react';
import SizeFilter from '../../container/filter/sizeFilter/sizeFilter';
import CartComponent from '../../container/cart/cart';
import ProductListing from '../../container/products';
import './mainProductListing.css';
import { Link,Redirect } from 'react-router-dom';

class MainProductListing extends React.Component {

    render() {
        return (
            <div>
                <button  className="go-to-cartbtn"><Link to={{ pathname: this.props.match.url + '/cart' }}>Go to Cart</Link></button>
                <div className="products_list_main">
                    <section className="filter-block">
                        <SizeFilter></SizeFilter>
                    </section>
                    {/* <div><CartComponent></CartComponent></div> */}
                    <div className="list-product">
                        <ProductListing></ProductListing>
                    </div>
                </div>
            </div>

        );
    }
}
export default MainProductListing;