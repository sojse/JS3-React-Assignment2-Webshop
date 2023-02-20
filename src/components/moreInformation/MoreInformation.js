import './MoreInformation.css'

function MoreInformation(props) {

    let item = props.searchResult[props.clickedItem]

    let backToSearchResult = (e) => {
        e.preventDefault();
        props.backToSearchResult();
    }
   
  return (
    <div className="itemContainer">
        <img src={item.img} alt={item.name} />
        <div className="itemInformationContainer">
            <h3 className="itemName">{item.name}</h3>
            <p className="itemDescription">{item.description}</p>
            <span className="itemPrice">{item.price} SEK</span>
            <button className='btn' onClick={backToSearchResult}>Back to Search Result</button>
        </div>
    </div>
  );
}

export default MoreInformation;