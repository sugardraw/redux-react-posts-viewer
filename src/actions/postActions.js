import { FETCH_POSTS, NEW_POST } from "../actions/types";

//actions creators
export function fetchPosts() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        });
      })
      .catch(err => console.log(err));
  };
}

export function createPost(post) {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",

      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(post => {
        dispatch({
          type: NEW_POST,
          payload: post
        });
      });
  };
}
