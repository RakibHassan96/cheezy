import React, { Component } from 'react';
import logo from './logo.svg';
import './AddPost.css';

class AddPost extends Component {
  constructor(){
    super();
    this.state = {
      //Default Values
      author:"Kanye West",
      caption:"Cheezy Season Approaching",
      image_url:"https://i.pinimg.com/originals/a7/54/0d/a7540dfb718ccc0ae2ad8c4f8addbe73.jpg",
      profile_image_url:"https://i.imgflip.com/p0ydm.jpg",
      date: "4-20-1969",
    }
  }
  //Change state.author as its being typed in the input
  handleAuthor(event){
    const author = event.target.value;
    this.setState({
      author: author
    })
    console.log(author);
  }
  //Change state.caption as its being typed in the input
  handleCaption(event){
    const caption = event.target.value;
    this.setState({
      caption: caption
    })
  }
  //Change state.image_url as its being typed in the input
  handleImage(event){
    const image = event.target.value;
    this.setState({
      image_url: image
    })
  }
  //Change state.profile_image_url as its being typed in the input
  handleProfile(event){
    const profile = event.target.value;
    this.setState({
      profile_image_url: profile
    })
  }
  //On submit of form, sends Post Object filled by state elements to App Component
  handleSubmit(event){
    event.preventDefault();
    var obj = {
      author: this.state.author,
      caption: this.state.caption,
      image_url: this.state.image_url,
      profile_image_url: this.state.profile_image_url,
      date : this.state.date,
      postId: -1
    };
    //Callback from App is passed through props, allows App to acces Post Object
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
    return(
      <div className="AddPost">
      <button id="formButton" data-toggle="modal" data-target="#postForm">
      <img id="addIcon" src="https://www.shareicon.net/data/512x512/2016/08/18/809318_add_512x512.png"/></button>
      <div id="postForm" className="modal fade" role="dialog">
      <div className="modal-dialog">
      <div className="modal-content">
      <div id="postFormBody" className="modal-body">
      <form id="addPostForm">
      <div className="form-row"> Author: <input className="text-input" type="text" onChange={this.handleAuthor.bind(this)}></input> </div>
      <div className="form-row"> Caption: <input className="text-input" type="text" onChange={this.handleCaption.bind(this)}></input> </div>
      <div className="form-row"> Image URL:   <input className="text-input" type="text" onChange={this.handleImage.bind(this)}></input> </div>
      <div className="form-row"> Profile Image URL:   <input className="text-input" type="text" onChange={this.handleProfile.bind(this)}></input> </div>
      <div className="submit-row"> <input type="submit" className="btn btn-warning" onClick={this.handleSubmit.bind(this)} data-dismiss="modal"></input> </div>
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
