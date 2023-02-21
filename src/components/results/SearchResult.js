import { useState } from "react";
import Products from "../../products";
import MoreInformation from "../moreInformation/MoreInformation";
import './SearchResult.css'

function SearchResult(props) {

    /**
     * gets all the objects in the json file and puts them in an array
     */
    const productArray = Object.values(Products);   
    let searchResult = [];
    const [itemId, setItemId] = useState(0);
    const [state, setState] = useState(false);

    if(props.search !== '') {
        for( let i = 0; i < productArray.length; i++ ) {
            let productName = productArray[i].name;
            let productDescription = productArray[i].description;
            let search = props.search;

            if(productName.includes(search) || productDescription.includes(search)) {
                searchResult.push(productArray[i]);
            }
        }
    }

    let displaySearchResult = (e, i) => {

        return (
            <li key={i}>
                    <img src={searchResult[i].img} alt={searchResult[i].name}/>
                <div className='productContainer'>
                    <div className="productContainerLeft">
                        <span className="productName">{searchResult[i].name}</span>
                        <span className="detailViewButton" id={i} onClick={moreInformation}>More information</span>
                    </div>
                    <div className="productContainerRight">
                        <span>{searchResult[i].price} SEK</span>
                        <button className="btn" id={i} onClick={addToCart}>Add to cart</button>
                    </div>
                </div>

            </li>
        );
    }

    let addToCart = (e) => {
        props.addToCart(e.target.id, searchResult);
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
        {!state ? <ul className="searchResult">
            { props.search && searchResult.map(displaySearchResult)}
        </ul> : <MoreInformation clickedItem={itemId} searchResult={searchResult} backToSearchResult={backToSearch} />}
    </div>
  );
}

export default SearchResult;