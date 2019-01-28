import { BrowserRouter, Route} from "react-router-dom"
import React, {Fragment} from 'react'
import Nav from './components/navigation/Nav'
import Footer from './components/footer/Footer'
import Home from './components/home/HomePage'
import AboutGrisha from './components/about/AboutGrisha'
import AboutJose from './components/about/AboutJose'
import AboutMatt from './components/about/AboutMatt'
import AboutDan from './components/about/AboutDan'
import AboutFarhan from './components/about/AboutFarhan'
import SignUp from './components/signUp/SignUp'
import SignIn from './components/signIn/SignIn'
import NewItem from './components/newItem/NewItem'
import Item from './components/item/Item'
import Dashboard from './components/dashboard/Dashboard'
import { connect } from 'react-redux'
import Loading from './components/loading/Loading'
import Results from './components/results/Results'
import Global from './components/global/Global'

class Router extends React.Component {  
  loadingOrContent(isLoading) {
    const result = isLoading
      ? <Loading />
      : (<Fragment>
				<div className="container">
            <Route path="/" component={Global} />
					  <Route path="/home" component={Home} />
					  <Route path="/grisha" component={AboutGrisha} />
					  <Route path="/jose" component={AboutJose} />
					  <Route path="/matt" component={AboutMatt} />
					  <Route path="/dan" component={AboutDan} />
					  <Route path="/farhan" component={AboutFarhan} />
					  <Route path="/signup" component={SignUp} />
					  <Route path="/signin" component={SignIn} />
					  <Route path="/newItem" component={NewItem} />
					  <Route path="/item" component={Item} />
					  <Route path="/dashboard" component={Dashboard} />
            <Route path="/loading" component={Loading} />
            <Route path='/results' component={ Results } />
				</div>
				<Footer/>
      </Fragment>)
    return result
  }

	render() {
		return(
			<BrowserRouter>
			<div>
				<Nav />
				{ this.loadingOrContent(this.props.loading) }
			 </div>
		</BrowserRouter>
		)
	}
}

const mapStateToProps = (store) => {
	return store
}

export default connect(mapStateToProps)(Router)
