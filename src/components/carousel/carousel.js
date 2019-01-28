import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Carousel extends React.Component {

  mapItemToCarouselItem(item, index) {
    return (
      <div className={ index === 0 ? "item active" : "item"}>
        <Link to={{
          pathname: "/item",
          state: {
            item: item,
            itemImage: item.image
          }
        }}>
          <img src={item.image} alt={item.description} />
        </Link>

        <div className="carousel-caption">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      </div>
    )
  }

  mapItemsToCarouselIndicators(items) {

  }

  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          { this.props.searchResults.forEach((item, index) => {
            return (
              <li data-target="#myCarousel" 
              data-slide-to={index} 
              className={index === 0 ? "active" : ""}></li>
            )
          })}
        </ol>


        <div className="carousel-inner">
          {this.props.searchResults.forEach((item, index) => this.mapItemToCarouselItem(item, index))}
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

const mapStateToProps = ({items}) => {
  const searchResults = items
  return {
    searchResults
  }  
}

export default connect(mapStateToProps)(Carousel)