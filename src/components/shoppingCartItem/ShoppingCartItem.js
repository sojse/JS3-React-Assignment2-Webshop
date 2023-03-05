function ShoppingCartItem(props) {

    console.log(props)

    
    let removeItem = () => {
        props.removeItem(props.item.productNumber);
    }

    return (
        <div className='purchasedProduct' >
            <img src={props.item.img} alt={props.item.name} />
            <div>
                <h3>{props.item.name}</h3>
                <div className='priceInformation'>
                    <span>Qty: {0}</span>
                    <span>Price: {props.item.price}</span>
                    <span>Total: {props.item.quantity * props.item.price}</span>
                </div>
            </div>
            <span className='removeItem btn' onClick={removeItem}>X</span>
        </div>
    );
}

export default ShoppingCartItem;