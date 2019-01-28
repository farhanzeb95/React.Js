import React from 'react'
import Select from 'react-select'
import { 
  addCategory,
  setSearchQuery,
  handleFetchSearchResults
} from '../../actions/search'
import { connect } from 'react-redux'


class SearchBar extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        { label: "All"},
        { label: "Book"},
        { label: "Furniture"},
        { label: "Electronics"},
        { label: "School Supplies"},
        { label: "Other"}
      ]
    }
  }
  
	searchBarStyle ={
		width: "600", 
		display: "flex",
		justifyContent: "space-between", 
		alignItems: "center"
  }

  handleDropDownChange = (category) => {
    this.props.dispatch(addCategory(category.label))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleFetchSearchResults(
      this.props.searchQuery,
      this.props.category
    ))
  }

  handleSearchQueryChange = (e) => {
    this.props.dispatch(setSearchQuery(e.target.value))
  }

  render() {
      return(
      <div className="row" style={this.searchBarStyle}>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group" 
              style = {{
                marginLeft: "65px",
                "display":"flex", 
                "height": "inherit"
              }}>
              <div style={{
                width: "160px"}}>
                <Select 
                style={{boxShadow: 'none !important'}}
                  value={{label: this.props.category}}
                  options={this.state.categories} 
                  onChange={this.handleDropDownChange}
                />
              </div>
              <input 
                style={{
                  borderRadius: "0",
                  height: "38px",
                  width: "350px",
                }}
                value = {this.props.searchQuery} 
                className="form-control col-lg-6" 
                type="text" 
                width= "800px"
                aria-label="Search" 
                placeholder="Gator Search..." 
                onChange={this.handleSearchQueryChange}		
              />
              <span className="input-group-btn" >
                <button 
                className="btn btn-light" 
                type="submit" 
                style={{
                  // borderRadius: "5px",
                  height: "38px",
                  marginLeft: "-3px",
                  color: "white",
                  backgroundColor: "#7851a9"
                }}> 
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span> 
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({search}) => {
  const {searchQuery, category} = search
  return {
    searchQuery,
    category
  }
}

export default connect(mapStateToProps)(SearchBar)