// import React from 'react';
import {connect} from 'react-redux';
import CartComponent from '../../Components/CartComponent/CartComponent'
// import {addToCart, removeToCart} from '../../redux store/actions/cartAction'
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps = dispatch =>({
    // addToCartHandler: data => dispatch(addToCart(data)),
    // removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartComponent)
// export default Home