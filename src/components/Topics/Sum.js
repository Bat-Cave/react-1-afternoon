import React, {Component} from 'react';

class Sum extends Component{
  constructor(){
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    }
  }

  handleChange1(val){
    this.setState({number1: parseInt(val, 10)})
  }

  handleChange2(val){
    this.setState({number2: parseInt(val, 10)})
  }

  add(num1, num2){
    let sum = this.state.sum;

    sum = num1 + num2;

    this.setState({sum: sum})
  }

  render(){
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value) }/>
        <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2)}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum