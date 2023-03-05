import { useState, useEffect, useContext } from "react";
import Products from "../../products";
import MoreInformation from "../moreInformation/MoreInformation";
import ProductCard from "../productCard/ProductCard";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import './SearchResult.css'

function SearchResult(props) {

    const productArray = Object.values(Products);   //gets all the objects in the json file and puts them in an array 
    const [search, setSearch] = useState([]);
    const [itemId, setItemId] = useState(0);
    const [showMoreInformation, setState] = useState(false);
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
            setSearch(temp);
        }
    }, [props.search])


    let addToCart = (e) => {
        let updatedShoppingCart = [...shoppingCart.product]
        updatedShoppingCart.push(search[e.target.id])
        shoppingCart.setProducts(updatedShoppingCart);
    }

    let moreInformation = (e) => {
        setItemId(e.target.id);
        setState(true);
    }

    let backToSearch = () => {
        setState(false);
    }


  return (
    <div className="searchResultContainer">
        <h2>Search Result</h2>
        {!showMoreInformation ? <ProductCard searchResult={search} onMoreInformationClick={moreInformation} onAddToCartClick={addToCart} />
            : <MoreInformation clickedItem={search[itemId]} backToSearchResult={backToSearch} />}
    </div>
  );
}

export default SearchResult;