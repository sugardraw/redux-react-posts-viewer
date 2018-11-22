import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h5>{this.props.data.title}</h5>
        <div>{this.props.data.body}</div>
      </div>
    );
  }
}

export default Post;
