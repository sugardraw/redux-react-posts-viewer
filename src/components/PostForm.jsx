import React, { Component } from "react";
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onsubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);

    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="postform">
        <form onSubmit={this.onsubmit}>
          <label htmlFor="title">Title:</label>
          <input
            onChange={this.onchange}
            name="title"
            type="text"
            value={this.state.name}
          />
          <label htmlFor="title">Body:</label>
          <textarea
            onChange={this.onchange}
            name="body"
            type="text"
            value={this.state.body}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}



export default connect(null, { createPost })(PostForm);
