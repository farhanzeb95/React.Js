import React from 'react'
import { connect } from 'react-redux';

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spaces: "",
      dots: "",
      numberOfDots: 3
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {

    let numberOfDots = this.state.dots.length + 1
    if (numberOfDots > this.state.numberOfDots) {
      numberOfDots = 0
    }

    let newDots = ""
    for(let i = 0; i < numberOfDots; i++) {
      newDots += "."
    }

    let newSpaces = ""
    for(let i = 0; i < (this.state.numberOfDots - numberOfDots); i++) {
      newSpaces+=String.fromCharCode(183)
    }

    this.setState({
      dots: newDots,
      spaces: newSpaces
    });
  }

  render() {
    return(
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
        <h1 style={{fontSize: "75px",color: '#7851a9'}}>{this.state.dots + this.state.spaces}</h1>
      </div>
    )
  }
}

export default connect()(Loading) 