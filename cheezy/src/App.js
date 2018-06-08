
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
  //Callback that is passed to AddPost component using props
  //Allows access to Post Object created by AddPost
  /*
  The Post Object =
  {
    author: this.state.author, //state is of the AddPost Component
    caption: this.state.caption,
    image_url: this.state.image_url,
    profile_image_url: this.state.profile_image_url,
    date : this.state.date,
    postId: -1
  };
  */
  getAddedPost = (addedPost) => {
    let updated_list_of_posts = this.state.list_of_posts;
    //Post Object is pushed to app.state.list_of_posts
    updated_list_of_posts.push(addedPost);
    this.setState(
      {list_of_posts:updated_list_of_posts}
    );
    console.log(this.state.list_of_posts);
  }
  render() {
    const posts = this.state.list_of_posts.map((post,i) =>
    { console.log(post);
    	post.postId = i;
      	if(post !== undefined)
      		return <Post key={i} postInfoFromApp={post} />
      }
    );
    return (
      <div className="App">
      <div className="App-header">
           <div className="app-name-logo-container">
               <p className="App-name"> Cheezy </p>
               <img id="cheezy-logo" src="cheese-icon.png"/>
          </div>
           <AddPost  appCallback={this.getAddedPost}/>
           <p className="App-credits"> a React social network </p>
      </div>
      {posts}
      </div>
    );
  }
}

export default App;
