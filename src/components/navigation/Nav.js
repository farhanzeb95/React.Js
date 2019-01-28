import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { handleRemoveAuthedUser } from "../../actions/authedUser"
import SearchBar from '../searchBar/SearchBar'
import { isSignedIn } from '../../api/authAPI'


class Nav extends React.Component {
  signInAndSignUp = () => (
    <Fragment>
      <li><Link to="/signin" >Sign In</Link></li>
      <li><Link to="/signup" id="signupbtn">Sign Up</Link></li>
    </Fragment>
  )
  signOut = () => {
    this.props.dispatch(handleRemoveAuthedUser())
  }
  authedUserView = (firstName) => (   
    <Fragment>
      <li className="dropdown">
        <a href="/home"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false">
          Hello, {firstName} !
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
          <li onClick={this.signOut}><a>Sign out</a></li>
        </ul>
      </li>
    </Fragment>
  )
  render() {
    const { authedUser } = this.props
    const firstName = authedUser && authedUser.split(" ")[0]
    const correctRouteToPostItem = isSignedIn() ? "/newItem" : "/signup"
    return(
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/home">Caiman</Link>
          </div>

        <div className="collapse navbar-collapse" id="navbar">

          <div className="col-sm-3 col-md-3">
              <div className="navbar-form" role="search">
                <div className="input-group">
                  <SearchBar />
                </div>
              </div>
          </div>
          
          <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
                <a href="/home"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Meet the Team
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/grisha">Grisha Kapil</Link></li>
                  <li><Link to="/jose">Jose Medina </Link></li>
                  <li><Link to="/matt">Matthew Farrer</Link></li>
                  <li><Link to="/dan">Dan Andrei Iorga</Link></li>
                  <li><Link to="/farhan">Farhan Zeb Malik</Link></li>
                </ul>
              </li>
              <li><Link to={correctRouteToPostItem}>Sell</Link></li>
              {firstName === null
                ? this.signInAndSignUp()
                : this.authedUserView(firstName)}
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav) 