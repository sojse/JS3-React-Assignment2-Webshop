

    useEffect(() => { 
        let purchased = props.item;
        let quantityArray = [];
        let productArray = [];
        let tempPrice = 0;  // needed to prevent the total price to add the same item again after removing something from the cart
    
        if (purchased.length <= 0)
            return;
    
        for (let i = 0; i <purchased.length; i++) {
            if (productArray.includes(purchased[i].productNumber)) {
                for(let j = 0; j < quantityArray.length; j++) {
                    if (quantityArray[j].productNumber == purchased[i].productNumber) {
                        quantityArray[j].quantity++
                    }
                }
            }
        }
            // checks if there are any items to add to the shoppingcart
            if(purchased.length > 0) {
                for(let i = 0; i < purchased.length; i++) {
                    tempArray.push({product: purchased[i], quantity: 1});
                    tempPrice += purchased[i].price;
    
                    //just nu försvinner det dubbla helt så det inte syns alls
                    for(let j = 0; j < purchased.length; j++) {
                        if(i !== j && purchased[i].productNumber === purchased[j].productNumber) {
                            console.log('duplicate')
                            //tempPrice += purchased[i].price;
                            tempArray[i].quantity++;
                            /**om deh hittar  */
                        }
                    }
    
                        // checks if one of the previous item has the same product number as the last added
                        /*if(i !== purchased.length - 1 && purchased[i].productNumber === purchased[purchased.length - 1].productNumber) {
                            console.log('duplicate')
                            //tempPrice += purchased[i].price;
                            tempArray[i].quantity++;
                            tempArray.pop();
                        }*/
                }
            }
            setTotal(tempPrice);
            setShoppingCart(tempArray);        
    
    }, [props.item]);

        /*useEffect(() => { 
        let purchased = props.item;
        let tempArray = [];
        let tempPrice = 0;  // needed to prevent the total price to add the same item again after removing something from the cart
    
            // checks if there are any items to add to the shoppingcart
            if(purchased.length > 0) {
                for(let i = 0; i < purchased.length; i++) {
                    tempArray.push({product: purchased[i], quantity: 1});
                    tempPrice += purchased[i].price;
    
                    //just nu försvinner det dubbla helt så det inte syns alls
                    for(let j = 0; j < purchased.length; j++) {
                        if(i !== j && purchased[i].productNumber === purchased[j].productNumber) {
                            console.log('duplicate')
                            tempArray[i].quantity++;
                        }
                    }
                }
            }
            setTotal(tempPrice);
            setShoppingCart(tempArray);        
    
    }, [props.item]);*/