import { useState, useEffect, useContext } from "react";
import Products from "../../products";
import MoreInformation from "../moreInformation/MoreInformation";
import ProductCard from "../productCard/ProductCard";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import './SearchResult.css'

function SearchResult(props) {

    const productArray = Object.values(Products);   //gets all the objects in the json file and puts them in an array 
    const [matchedProducts, setMatchedProducts] = useState([]);
    const [itemId, setItemId] = useState(0);
    const [showMoreInformation, setVisibility] = useState(false);
    const shoppingCart = useContext(ShoppingCartContext);


    useEffect(() => {

        // compares the search word with the productArray and picks out the matches
        if(props.search !== '') {
            let temp = [];
            for( let i = 0; i < productArray.length; i++ ) {
                let productName = productArray[i].name;
                let productDescription = productArray[i].description;
                let search = props.search;

                if(productName.includes(search) || productDescription.includes(search)) {
                    //searchResult.push(productArray[i]);
                    temp.push(productArray[i]);
                }
            }
            setMatchedProducts(temp);
        }
    }, [props.search])


    /**
     * When the user adds an item to the cart the product will be added to the shopping cart context
     */
    let addToCart = (e) => {
        let updatedShoppingCart = [...shoppingCart.product]
        updatedShoppingCart.push({product: matchedProducts[e.target.id], quantity: 1})
        shoppingCart.setProducts(updatedShoppingCart);
    }

    /**
     * Sets the id for the product after the user clicks the more information button, this will be used as an
     * index to forward the choosen product as props to the more information component
     */
    let moreInformation = (e) => {
        setItemId(e.target.id);
        setVisibility(true);
    }

    /**
     * Hides the more information pop up and goes back to the search result
     */
    let backToSearch = () => {
        setVisibility(false);
    }


  return (
    <div className="searchResultContainer">
        <h2>Search Result</h2>
        {!showMoreInformation ? <ProductCard searchResult={matchedProducts} onMoreInformationClick={moreInformation} onAddToCartClick={addToCart} />
            : <MoreInformation clickedItem={matchedProducts[itemId]} backToSearchResult={backToSearch} />}
    </div>
  );
}

export default SearchResult;