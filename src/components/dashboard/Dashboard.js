import React from 'react'
import { connect } from 'react-redux'
import { removeSuccess } from '../../actions/success'
import Results from '../results/Results'
import { handleReceiveDashboardItems } from '../../actions/items';

class Dashboard extends React.Component {
  componentDidMount() {
    if (this.props.authedUser === null) {
      this.props.history.push("/home")
    }

    const { success, error, loading } = this.props

    // if this is true then we just got redirected from the post item page and need to 
    // reset success.
    if ((success && !error && !loading)) {
      this.props.dispatch(removeSuccess())
    }
    
  }


  dashboardContent = () => {
    const { items } = this.props
    if (items && items.length > 0) {
      return <Results result={items}/>
    } else {
      return <p>You have not created any items!</p>
    }
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Your Items</h2>
          { this.dashboardContent() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, dashboardItems, error, loading, success  }) => {
  const items = dashboardItems
  return {
    authedUser,
    items, 
    error, 
    loading, 
    success
  }
}

export default connect(mapStateToProps)(Dashboard)
