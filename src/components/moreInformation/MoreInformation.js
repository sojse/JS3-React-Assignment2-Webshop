import "./MoreInformation.css";

function MoreInformation(props) {

  //the item that will be used to show the correct product
  let item = props.searchResult;

  return (
    <div className="modalContainer">
        <div className="itemContainer">
          <img src={item.img} alt={item.name} />
          <div className="itemInformationContainer">
              <h3 className="itemName">{item.name}</h3>
              <p className="itemDescription">{item.description}</p>
              <span className="itemPrice">{item.price} SEK</span>
              <button className="btn" onClick={props.onBackToSearchClick} >Back to Search Result</button>
          </div>
      </div>
    </div>
  );
}

export default MoreInformation;