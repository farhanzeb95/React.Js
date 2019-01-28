import React from 'react';


function Item(props) {
  let { item, itemImage } = props.location.state

  if (!(item && itemImage)) {
    item = {
      name: "Name not available",
      category: "category not available",
      description: "description not available",
      condition: "condition not available",
      price: "0.00",
      email: "seller not available"
    }
    itemImage = "https://pbs.twimg.com/profile_images/605116406724706304/3zmRL_LG_400x400.jpg"
  }
  
  return(
    <div className="row"  style = {{"height":"400px"}}>
      <div className="col-md-4" style = {{"height":"inherit"}}>
        <div style={{"display":"flex", "justifyContent":"center", "alignItems": "center", "height": "inherit"}}>
          <img 
            style={{"display":"block",}} 
            src={itemImage} 
            width="400" 
            height="400"
            alt="Place holder"
            />
        </div>
      </div>
      <div className="col-md-8" style ={{"height":"inherit"}}>
        <h1 style={titleStyle}>{item.name}</h1>
        <p style={generalStyle}>Category:  {item.category}</p>
        <p style={generalStyle}>Condition: {item.condition}</p>
        <p style={generalStyle}>Price: ${item.price}</p>
        <p style={generalStyle}>Seller contact: {item.email}</p>
        <p style={descriptionStyle}>{item.description}</p>
      </div>
    </div>
  )}

let titleStyle = {
  fontSize: "50px",
  marginTop: "0px"
}
let generalStyle ={
  fontSize: "25px"
}
let descriptionStyle = {
  fontSize: "20px"
}
export default Item
