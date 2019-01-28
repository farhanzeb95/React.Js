import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { handleAddAuthedUser } from '../../actions/authedUser'

class SignUp extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      agreeToTerms: false,
    };
    
    this.handleAgreeToTermsFieldChange = this.handleAgreeToTermsFieldChange.bind(this);
  }

  componentDidMount() {
    if (this.props.authedUser) {
      this.props.history.push("/dashboard")
    }
  }

    handleAgreeToTermsFieldChange(e) {
      this.setState({agreeToTerms: !this.state.agreeToTerms});
    }

  handleSubmit = (e) => {
    e.preventDefault()
    const {username, email, password} = this.state
    this.props.dispatch(handleAddAuthedUser({
      username,
      email,
      password
    }))
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

  handleInputChange = (e) => {
    const { value, name } = e.target
    this.setState(() => ({
        [name]: value
    }))
  }

  createLabelWithInputField = (labelText, inputFor, inputPlaceHolder, inputValue, inputType) => (
    <Fragment>
      <label htmlFor={inputFor}>{labelText}</label>  
      <div className="input-group" style={{width: "100%"}}>
        <input  style={signUpInputStyles} 
                name={inputFor}
                id={inputFor}
                className='form-control' 
                type={inputType} 
                placeholder={inputPlaceHolder} 
                value={inputValue} 
                onChange={this.handleInputChange} />
      </div>
    </Fragment>
  )

  render() {
    const {error, authedUser, loading} = this.props
    console.log("Error:", error)
    console.log("Authed user:", authedUser)
    console.log("Loading:", loading)
    if ((!error && authedUser && !loading)) {
      this.props.history.push("/home")
    }
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="jumbotron">
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>
            {error ? this.renderErrorMsg() : null}
            <form onSubmit={this.handleSubmit}>

              {this.createLabelWithInputField(
                "Full Name", "username", "First Last", this.state.username, "text"
              )}

              {this.createLabelWithInputField(
                "Email", "email", "example@mail.com", this.state.email, "text"
              )}

              {this.createLabelWithInputField(
                "Password", "password", "", this.state.password, "password"
              )}

              <div>
                <input type="checkbox"
                  id="terms"
                  onChange={this.handleAgreeToTermsFieldChange} />
                <span> I Agree to Terms </span>
              </div>

              <div className="input-group" style={{ width: "100%", marginTop: "15px" }}>
                <button className="btn btn-primary btn-group-justified"
                  type="submit"
                  disabled={this.state.agreeToTerms ? false : true}
                  value="Submit">Create my Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const signUpInputStyles = {
  border: "1px solid #bbb",
  width: "100% !important",
  marginBottom: "15px",
  boxSizing: "borderBox"
}

const mapStateToProps = ({error, authedUser, loading}) => {
  return {
    error,
    authedUser,
    loading
  }
}

export default connect(mapStateToProps)(SignUp)