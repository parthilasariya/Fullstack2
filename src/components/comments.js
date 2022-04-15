import React from "react";
import LikeButton from "./likebutton";
import Timer from "./timer";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  
  }
  render = () => {
    return (
        <><Timer> </Timer> {this.props.tweets}<LikeButton></LikeButton></>
    );
  }
}
 export default Comments; 