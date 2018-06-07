import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './comments';
import AddPost from './AddPost';
import Post from './Post';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list_of_posts:[],
    }
  }
  getAddedPost = (addedPost) => {
    let updated_list_of_posts = this.state.list_of_posts;
    updated_list_of_posts.push(addedPost);
    this.setState(
      {list_of_posts:updated_list_of_posts}
    );
    console.log(this.state.list_of_posts);
  }
  render() {
    const posts = this.state.list_of_posts.map((post,i) =>
    { console.log(post);
      if(post !== undefined)
      return <Post key={i} postInfoFromApp={post} />});
    {/*(<div key={i}>
      {post.author} -
      {post.caption}<br/>
      <img src={post.image_url}/><br/>
      <img src={post.profile_image_url}/><br/>
    </div>));*/}
    return (
      <div className="App">
        <Comments />
      <AddPost  appCallback={this.getAddedPost}/>
      {posts}
      {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}
      </div>
    );
  }
}

export default App;