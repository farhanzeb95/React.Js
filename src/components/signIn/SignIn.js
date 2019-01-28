import React from 'react'
import { handleLoginUser } from '../../actions/authedUser'
import { connect } from 'react-redux'

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};

    this.handleEmailFieldChange = this.handleEmailFieldChange.bind(this);
    this.handlePasswordFieldChange = this.handlePasswordFieldChange.bind(this);

	this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    if (this.props.authedUser) {
      this.props.history.push("/dashboard")
    }
  }


  	handleEmailFieldChange(e) {
    	this.setState({ email: e.target.value });
  	}

  	handlePasswordFieldChange(e) {
  		this.setState({ password: e.target.value });
  	}


  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(handleLoginUser(this.state))
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
    const {error, authedUser, loading} = this.props
    console.log("Error:", error)
    console.log("Authed user:", authedUser)
    console.log("Loading:", loading)
    if ((!error && authedUser && !loading)) {
      this.props.history.push("/dashboard")
    }
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="jumbotron">
            <h1 style={{textAlign: "center"}}>Sign In</h1>
              {error ? this.renderErrorMsg() : null}
              <form onSubmit={this.handleSubmit}>

                  <label>Email</label>
                  <div className="input-group" style={{width: "100%"}}>
                    <input style={signInInputStyles} 
                           className='form-control'  
                           type="email" 
                           placeholder="example@mail.com" 
                           value={this.state.email} 
                           onChange={this.handleEmailFieldChange} />
                  </div>

                  <label>Password</label>
                  <div className="input-group" style={{width: "100%"}}>
                    <input style={signInInputStyles} 
                           className='form-control'  
                           type="password" 
                           value={this.state.password} 
                           onChange={this.handlePasswordFieldChange} />
                  </div>

                  <div className="input-group" style={{width: "100%"}}>
                    <button className="btn btn-primary btn-group-justified"
                            type="submit" 
                            value="Submit">Sign In
                    </button>
                  </div>
              </form>
          </div>
        </div>
      </div>
  
    );
  }
}

const signInInputStyles = {
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

export default connect(mapStateToProps)(SignIn)