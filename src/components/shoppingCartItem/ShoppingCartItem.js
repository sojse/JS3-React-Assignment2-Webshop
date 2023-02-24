function ShoppingCartItem(props) {
    
    let removeItem = () => {
        props.removeItem(props.item.product.productNumber);
    }

    return (
      <>
        <li className='purchasedProduct' >
            <img src={props.item.product.img} alt={props.item.product.name} />
            <div>
                <h3>{props.item.product.name}</h3>
                <div className='priceInformation'>
                    <span>Qty: {props.item.quantity}</span>
                    <span>Price: {props.item.product.price}</span>
                    <span>Total: {props.item.quantity * props.item.product.price}</span>
                </div>
            </div>
            <span className='removeItem btn' onClick={removeItem}>X</span>
        </li>
      </>
    );
}

export default ShoppingCartItem;