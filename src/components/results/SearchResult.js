import Products from "../../products";

function SearchResult(props) {

    const productArray = Object.values(Products);
    let searchResult = [];

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



  return (
    <div>
        <h2>Search Result</h2>
        <ul></ul>
    </div>
  );
}

export default SearchResult;