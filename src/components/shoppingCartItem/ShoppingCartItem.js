import { useContext } from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";

function ShoppingCartItem(props) {

    const shoppingCart = useContext(ShoppingCartContext);

    // removes an item by sending the productnumber to the remove function in the shoppingCartContext
    let removeItem = () => {
        let id = props.item.product.productNumber
        shoppingCart.removeFromCart(id)
    }

    return (
        <li className="purchasedProduct" >
            <img src={props.item.product.img} alt={props.item.product.name} />
            <div>
                <h3>{props.item.product.name}</h3>
                <div className="priceInformation">
                    <span>Qty: {props.item.quantity}</span>
                    <span>Price: {props.item.product.price}</span>
                    <span>Total: {props.item.quantity * props.item.product.price}</span>
                </div>
            </div>
            <span className="removeItem btn" onClick={removeItem}>X</span>
        </li>
    );
}

export default ShoppingCartItem;