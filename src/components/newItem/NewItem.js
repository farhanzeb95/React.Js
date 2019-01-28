import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { handleCreateItem } from '../../actions/items'

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: '',
        description: '',
        condition: '',
        price: '',
        category: '',
        itemImage: '',
      },
      isNameValid: true,
    }
    this.handleItemImageFieldChange = this.handleItemImageFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.authedUser) {
      this.props.history.push("/signin")
    }
  }



  validateName = (name) => {
    // no more than 40 characters

    if (name.length > 40) {
      this.setState({ isNameValid: false })
    } else {
      this.setState({ isNameValid: true })
    }
  }

  handleInputChange = (e) => {
    const { value, name } = e.target
    this.setState(() => ({
      ...this.state, 
      item: {
        ...this.state.item,
        [name]: value
      } 
    }))
  }

  handleItemImageFieldChange(e) {
    this.setState({
      ...this.state, 
      item: {
        ...this.state.item,
        itemImage: e.target.files[0]
      } 
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(handleCreateItem(this.state.item))
  }

  renderErrorMsg = () => {
    return (
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span className="sr-only">Error:</span>
        {this.props.error}
      </div>
    )
  }

  render() {
    const {error, success, loading} = this.props
    console.log("Error:", error)
    console.log("Success:", success)
    console.log("Loading:", loading)
    if ((success && !error && !loading)) {
      this.props.history.push("/dashboard")
    }
    return (
      <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <h1 style={{ textAlign: "center" }}>Sell Item</h1>
        {error ? this.renderErrorMsg() : null}
        <form  onSubmit={this.handleSubmit}>

          <div className={this.state.isNameValid ? "form-group" : "form-group has-error"}>
            <label className="control-label" htmlFor="inputError1">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="inputError1"
              placeholder="Book Name, Furniture Item, etc..."
              value={this.state.item.name}
              name="name"
              onChange={this.handleInputChange} />
          </div>

          <label>Description of Item</label>
          <div className="input-group" style={{ width: "100%" }}>
            <textarea style={newItemFormInputStyles}
              className='form-control'
              type="text"
              placeholder="Enter a brief description of the item here."
              value={this.state.item.description}
              name="description"
              onChange={this.handleInputChange} />
          </div>

          <label>Price</label>
          <div className="input-group" style={{ width: "100%" }}>
            <input style={newItemFormInputStyles}
              className='form-control'
              type="number"
              min=".5" step="any"
              placeholder="$0.00"
              value={this.state.item.price}
              name="price"
              onChange={this.handleInputChange} />
          </div>

          <label>Condition</label>
          <div className="input-group" style={{ width: "100%" }}>
            <select style={newItemFormInputStyles}
              value={this.state.item.condition}
              onChange={this.handleInputChange}
              name="condition"
              className='form-control' >
              <option value="">Select...</option>
              <option value="original"> New </option>
              <option value="used"> Used </option>
              <option value="veryUsed"> Very Used </option>
            </select>
          </div>

          <label>Category</label>
          <div className="input-group" style={{ width: "100%" }}>
            <select style={newItemFormInputStyles}
              value={this.state.item.category}
              onChange={this.handleInputChange}
              name="category"
              className='form-control'>
              <option value="">Select...</option>
              <option value="book"> Book </option>
              <option value="furniture"> Furniture </option>
              <option value="electronics"> Electronics </option>
              <option value="schoolSupplies"> School Supplies </option>
              <option value="other"> Other </option>
            </select>
          </div>

          <label>Upload Image</label>
          <div className="input-group" style={{ width: "100%", marginBottom: "15px" }}>
            <input
              id="formControlsFile"
              type="file"
              label="File"
              name="itemImage"
              onChange={this.handleItemImageFieldChange} />
          </div>

          <div className="input-group" style={{ width: "100%" }}>
            <button className="btn btn-primary btn-group-justified"
              type="submit"
              value="Submit">Submit Item for Sale
            </button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

const newItemFormInputStyles = {
  border: "1px solid #bbb",
  width: "100% !important",
  marginBottom: "15px",
  boxSizing: "borderBox"
}

const mapStateToProps = ({authedUser, error, loading, success}) => {
  return {
    authedUser,
    error,
    success,
    loading
  }
}

export default connect(mapStateToProps)(NewItem)