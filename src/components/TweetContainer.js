import React, { Component } from 'react';
import './Commnet';



//const TweetContainer= () =>{
  //  return <h1>At home, binge watching Breaking Bad for second time!</h1>
    //<h2>You need to watch Narcos</h2>};
//  export default TweetContainer;

  class TweetContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          At home, binge watching Breaking Bad for second time!
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="Post" value="Post" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <TweetContainer />,
    document.getElementById('root')
  );