
import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    var now = new Date();
    var formatTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    this.state = {
        time: formatTime,
    }
  }
  render = () => {
    return (
        <>{this.state.time}</>
    );
  }
}
 export default Timer; 