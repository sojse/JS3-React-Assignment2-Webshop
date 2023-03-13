import { useState, useEffect, useContext } from "react";
import Products from "../../products";
import MoreInformation from "../moreInformation/MoreInformation";
import ProductCard from "../productCard/ProductCard";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import "./SearchResult.css"

function SearchResult(props) {

    const [matchedProducts, setMatchedProducts] = useState([]);     // used to store the products that match the search
    const [moreInformationVisible, setVisibility] = useState(false);    // makes the more information component visible when true
    const [itemIndex, setItemIndex] = useState(0);                            // used to store the index of the product to show in more information
    const shoppingCart = useContext(ShoppingCartContext);


    useEffect(() => {
        const productArray = Object.values(Products);   //gets all the objects in the json file and puts them in an array 

        // compares the search word with the productArray and picks out the matches
        if(props.search !== '') {
            let tempSearchResultArray = [];
            for( let i = 0; i < productArray.length; i++ ) {
                let productName = productArray[i].name;
                let productDescription = productArray[i].description;
                let search = props.search;

                if(productName.includes(search) || productDescription.includes(search)) {
                    tempSearchResultArray.push(productArray[i]);
                }
            }
            setMatchedProducts(tempSearchResultArray);
        }
    }, [props.search])


    // When the user adds an item to the cart the product will be added to the shopping cart context
    let addToCart = (e) => {
        shoppingCart.addToCart(matchedProducts[e.target.id]);
    }

    // Shows the more information pop up and sets the index of the item that will be showed
    let onMoreInformationClick = (e) => {
        setVisibility(true);
        setItemIndex(e.target.id);
    }

    // Makes the more information component disapear
    let backToSearch = () => {
        setVisibility(false);
    }


  return (
    <div className="searchResultContainer">
        <h2>Products</h2>
        <ProductCard searchResult={matchedProducts} onAddToCartClick={addToCart} onMoreInformationClick={onMoreInformationClick} />
        {moreInformationVisible && <MoreInformation searchResult={matchedProducts[itemIndex]} onBackToSearchClick={backToSearch} />}
    </div>
  );
}

export default SearchResult;