import React from 'react';
import image from '../Assets/iphone4.jpg'
import '../Home/Home.css'
import {connect} from 'react-redux';
// import Home from '../../Components/Home/Home'
import {addToCart, removeToCart} from '../../redux store/actions/cartAction'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log("Home",this.props);
        return (
            <div className="main-container">
                <h1>Home Component</h1>
                <div className="cart-wrapper">
                    <div className="img-wrapper">
                        <img src={image} alt="img" />
                    </div>
                    <div className="text-wrapper">
                        <span>
                            I-Phone
                    </span>
                        <span>
                            Price: $1000.00
                    </span>
                    </div>
                    <div className="btn-wrapper">
                        <button onClick={()=>this.props.addToCartHandler({price:1000,name:"i-Phone 11"})}>Add To Cart</button>
                        <button onClick={()=>this.props.removeToCartHandler()}>Remove To Cart</button>
                    </div>
                    {/* <div className="btn-wrapper">
                    <button>Remove To Cart</button>
                    </div> */}
                </div>
            </div>
        );
    }
}
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

// export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Home)