import React, {Component} from 'react';

class Palindrome extends Component{
  constructor(){
    super();

    this.state ={
      userInput: '',
      palindrome: '',
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  isPalindrome(userInput){
    let input = userInput.split('');
    let reverse = userInput.split('').reverse();
    let palindrome = ''
    
    for(let i = 0; i < input.length; i++){
      if(input[i] !== reverse[i]){
        palindrome = `${this.state.userInput} is not a palindrome!`;
      } else {
        palindrome = `${this.state.userInput} is a palindrome!`;
      }
    }

    this.setState({palindrome: palindrome})

  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }>Check</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}

export default Palindrome