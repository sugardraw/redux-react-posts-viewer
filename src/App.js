import React, { Component } from 'react';
import './App.css';
import PostsList from './components/PostsList';
import { Provider } from 'react-redux';
import { store } from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <PostsList />
       
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
