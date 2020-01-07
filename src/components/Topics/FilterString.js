import React, {Component} from 'react';

class FilterString extends Component{
  constructor(){
    super()

    this.state = {
      unfilteredArray: ['Rico', 'Melissa', 'Noble', 'Lorenzo', 'Carlisle'],
      userInput: '',
      filteredArray: []
    }

  }

  handleChange(userInput){
    this.setState({userInput: userInput})
  }

  filterNames(userInput){
    let names = this.state.unfilteredArray;
    let input = this.state.userInput;
    let filtered = [];
    for(let i = 0; i < names.length; i++){
      if(names[i].includes(input)){
        filtered.push(names[i]);
      }

    }

    this.setState({filteredArray: filtered})
  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    )
  }
}

export default FilterString