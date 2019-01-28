import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Results extends React.Component {

  render() {
    let { searchResults, result } = this.props 
    // result wins over searchResults
    let searchArray = result ? result : searchResults
    return(
      <div className="row">
        {/* {searchArray.map( (item) => <Result item={item} key={item._id}/> )} */}
      </div>
    )
  }
}

export function Result(props) {
	const filename = props.item.image
	console.log(filename)
	var tempImgElement = (
		<img 
		// image belonging to an item has that item's id
		id={props.item._id}
		data-src="holder.js/200x200" 
		className="img-thumbnail" 
		alt="200x200" 
		style={{width: "200px", height: "200px"}} 
		src={filename} data-holder-rendered="true"
		/>
	)
	return(
		<div className="col-md-4" style={{textAlign: "left"}}>
			{tempImgElement}
			<h3>
				<Link to={{
					pathname: "/item",
					state: { 
						item: props.item,
						itemImage: filename
					}
				}}>{props.item.name}
				</Link>
			</h3>
			<p><b>Category:</b> {props.item.category}</p>
			<p><b>Price:</b> ${props.item.price}</p>
			<p><b>Condition:</b> {props.item.condition}</p>
		</div>
	)
}

const mapStateToProps = ({search}, ownProps) => {
  const { searchResults } = search
  const { result } = ownProps
  return {
    searchResults,
    result
  }
}

export default connect(mapStateToProps)(Results)