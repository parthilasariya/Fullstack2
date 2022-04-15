import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0,
    };
    this.incNumber = this.incNumber.bind(this);
  }
  incNumber = () => {
      this.setState({
        number: this.state.number + 1,
      })
  }
  render = () => {
    return (
        <><button onClick={this.incNumber}>Like</button>
        {" "}{this.state.number} Likes
        </>
    );
  }
}
 export default LikeButton; 