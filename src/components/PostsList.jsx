import React, { Component } from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


class PostList extends Component {

    componentDidMount(){
      this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
      }
    }


  render() {
    return (
      <div>
        <PostForm />
        <div className="postlist">
          {this.props.posts.map((post, i) => (
            <Post key={`post-${i}`} data={post} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  posts: state.posts.items,
  newPost: state.posts.item
})



export default connect(mapStateToProps, {fetchPosts})(PostList);
