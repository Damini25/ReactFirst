import React from 'react';
import { fetchProductByID } from '../../productsService';
import * as actionTypes from '../../../../common/store/actions';
import { connect } from 'react-redux';

class ProductDescription extends React.Component {
    constructor(props) {
        super(props);
      this.state={
          productDescription:{}
      }
    }

    componentDidMount() {
        this.getProductById();
    }

    getProductById = () => {
        fetchProductByID(this.props.match.params.id).then((res) => {
            if (res.data) {
                this.setState({
                    productDescription:res.data['products'][0]
                })
            }
        })
    }

    render() {
        console.log('fetchProductByID', this.state.productDescription);
        return (
            <div className="product-div">
                {this.state.productDescription['isFreeShipping'] ? <label>Free Shipping</label> : ""}
                <img src="./../../../../assets/images/shirt1.jpg"></img>
                <div>{this.state.productDescription['title']}</div>
                <div>{this.state.productDescription['description']}</div>
                <div>{this.state.productDescription['currencyFormat']} {this.state.productDescription['price']}</div>
                <button onClick={(e) => { this.props.onAddingItemToCart(this.state.productDescription) }}>Add To Cart</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddingItemToCart: (item) => dispatch({ type: actionTypes.Add_Item_ToCart, itemToBeAdded: item })
    }
}
export default connect(null,mapDispatchToProps)(ProductDescription);