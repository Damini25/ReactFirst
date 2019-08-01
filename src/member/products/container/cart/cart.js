import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../common/store/actions/actionIndex';

class CartComponent extends React.Component {

    render() {
        console.log('itemincart', this.props)
        const itemsInCart = this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <div>{item['title']}</div>
                    <div>{item['description']}</div>
                    <div>{item['currencyFormat']}</div>
                    <button onClick={(e) => { this.props.onRemovingItemFromCart(item['id']) }}>Remove from Cart</button>
                </div>
            );
        })
        return (
            <div>
                <h4>Items In Cart</h4>
                {itemsInCart}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer['itemsInCart']
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onRemovingItemFromCart: (id) => dispatch(actionTypes.RemoveFromCart(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);;