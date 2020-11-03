import React from 'react';
import ReactDOM from 'react-dom';

//class is a type of function - instead of using function to initiate, we use keyword
//class, and the properties are assigned inside a constructor() method. 
// event handler attributes, myChangeHandler/mySubmitHandler via onChange/onSubmit control changes 
// all data is stored in the component state 
// state must be initialized in constructor method before you can use it. 


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
  }
  mySubmitHandler = (event) => {
    this.preventDefault();
    alert("You entered " + this.state.inputText);
    alert("Test");
  }
  
  //event handler myChangeHandler updates the state object with the input text
  //event.target.value gives access to the field value entered
  
  myChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Entered text: {this.state.inputText}</h1>
      <p>Please type anything:</p>
      <input type='text' onChange={this.myChangeHandler} />
      
      <input type='submit'/>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));