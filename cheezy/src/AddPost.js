import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddPost extends Component {
  constructor(){
    super();
    this.state = {
      author:"Kanye West",
      caption:"Cheezy Season Approaching",
      image_url:"https://i.pinimg.com/originals/a7/54/0d/a7540dfb718ccc0ae2ad8c4f8addbe73.jpg",
      profile_image_url:"https://i.imgflip.com/p0ydm.jpg",
      date: "4-20-1969",
      //stored_posts: []
    }
  }
  handleAuthor(event){
    const author = event.target.value;
    this.setState({
      author: author
    })
    console.log(author);
  }
  handleCaption(event){
    const caption = event.target.value;
    this.setState({
      caption: caption
    })
  }
  handleImage(event){
    const image = event.target.value;
    this.setState({
      image_url: image
    })
  }
  handleProfile(event){
    const profile = event.target.value;
    this.setState({
      profile_image_url: profile
    })
  }
  //Assume CallBack appCallback from App
  handleSubmit(event){
    event.preventDefault();
    var obj = {
      author: this.state.author,
      //80 character limit
      caption: this.state.caption,
      image_url: this.state.image_url,
      profile_image_url: this.state.profile_image_url,
      date : this.state.date,
      comments: [],
    };
    this.props.appCallback(obj);
    /*
    let updated_stored_posts = this.state.stored_posts;
    updated_stored_posts.push(obj);
    this.setState(
      {stored_posts: updated_stored_posts}
    )
    console.log(this.state.stored_posts);*/
  }
  render() {
    /*const posts = this.state.stored_posts.map((post,i) =>
    (<div key={i}>
      {post.author} -
      {post.caption}<br/>
      <img src={post.image_url}/><br/>
      <img src={post.profile_image_url}/><br/>
    </div>));
    console.log(posts);*/
    return(
      <div className="AddPost">
      <button style={{backgroundColor:"rgba(0,0,0,0)"}}data-toggle="modal" data-target="#myModal">
      <img src="https://www.shareicon.net/data/512x512/2016/08/18/809318_add_512x512.png"/></button>
      <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-body">
      <form>
      Author: <input type="text" onChange={this.handleAuthor.bind(this)}></input> <br/>
      Caption: <input type="text" onChange={this.handleCaption.bind(this)}></input> <br/>
      Image URL: <input type="text" onChange={this.handleImage.bind(this)}></input> <br/>
      Profile Image URL: <input type="text" onChange={this.handleProfile.bind(this)}></input>
      <input type="submit" onClick={this.handleSubmit.bind(this)} data-dismiss="modal"></input>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
export default AddPost;
