import React from "react";
import Comments from "./comments.js";
class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: "",
      tweets: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
    });
  }
  submit = (event) => {
    event.preventDefault();
    this.setState({
      tweets: [...this.state.tweets, this.state.tweet],
      tweet: "",
    });
  }
  render = () => {
    return (
        <>
        <div>
            {this.props.status}
        </div>
        <form onSubmit={this.submit}>
            <input type="text" value={this.state.tweet} onChange={this.handleChange} />
            <button type="submit">Post</button>
        </form>
        {this.state.tweets.length > 0 ? <Comments tweets={this.state.tweets[this.state.tweets.length-1]} /> : null}
        </>
    );
  }
}
 export default TweetContainer;    