import './ShoppingCart.css'

function ShoppingCart(props) {

    let quantity = 1;
    let totalProductPrice = 1000;
    let totalPrice = 100000;
    
    //console.log(props.item);

    let displayShoppingCart = (e, i) => {

        return (
            <li key={i} className='purchasedProduct' >
                <img src={e.img} alt={e.name} />
                <div>
                    <h3>{e.name}</h3>
                    <div className='priceInformation'>
                        <span>Qty: {quantity}</span>
                        <span>Price: {e.price}</span>
                        <span>Total: {totalProductPrice}</span>
                    </div>
                </div>
                <span className='removeItem btn'>X</span>
            </li>
        );
    }
  
    return (
      <div className='shoppingCartContainer'>
        <h2>Shopping Cart</h2>
        <ul>
            {props.item.map(displayShoppingCart)}
        </ul>
        <div>
            <span>Total:</span>
            <span>{totalPrice} SEK</span>   
        </div>
      </div>
    );
  }
  
  export default ShoppingCart;