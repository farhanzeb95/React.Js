import React, { Fragment } from 'react'
import { connect } from 'react-redux';

class Global extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home")
    }
  }

  render() {
    // if (this.props.redirect === true && this.props.loading === false) {
    //   this.props.history.push("/")
    // }
    return(<Fragment></Fragment>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    ...state,
    ...ownProps
  }
}

export default connect(mapStateToProps)(Global)