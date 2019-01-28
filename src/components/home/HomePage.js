import React from 'react'
import { connect } from 'react-redux'
import { fireRedirect } from '../../actions/redirect'
import Carousel from '../carousel/carousel'
import { handleFetchInitialData } from '../../actions/items'
import { removeSuccess } from '../../actions/success';
import Results from '../results/Results';

class Home extends React.Component {
  componentDidMount() {
    const {redirect, success, loading, dispatch, history} = this.props
    if (redirect) {
      dispatch(fireRedirect())
      history.push("/results")
    } else if (success && !loading){
      dispatch(removeSuccess())
    } else if (!success) {
      dispatch(handleFetchInitialData())
    }
  }

	render() {
		return (
      <div style={{ paddingTop: "0px" }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "5em"
        }}> Caiman </h1>
        <p style={{
          textAlign: "center",
          fontSize: "1.3em",
          fontWeight: "lighter"
        }}>
          An online store helping college students on their
          journey to success.
        </p>
        <Results result={this.props.items} />
      </div>
    	);
	}
}

const mapStateToProps = ({redirect, success, loading, items}) => {
  return {
    redirect,
    success,
    loading,
    items
  }
}

export default connect(mapStateToProps)(Home)