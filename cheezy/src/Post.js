import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

     constructor(){
          super();
          this.state = {
               author: "elmo",
               caption: "I went to the beach",
               imageUrl: "elmobeach.png",
               profileUrl: "elmo.jpg",
               likes: 8,
               cheese: 11,
               date: "",
               comments: []
          }
     }

     render() {



          return (
               <div className="Post">
                    <div className="Post-header">
                         <p className="author-name"> {this.state.author} </p>
                         <img className="profile-picture" src={this.state.profileUrl} />
                    </div>
                    <div className="picture-container">
                         <img className="picture-image" src={this.state.imageUrl} />
                    </div>
                    <div className="captions-actions-container">
                         <div className="caption-container">
                              <p className="caption-label"> {this.state.caption} </p>
                         </div>
                         <div className="actions-container">
                              <button className="like-button"></button>
                              <p className="likes-label"> {this.state.likes} </p>
                              <button className="cheese-button"></button>
                              <p className="cheese-label"> {this.state.cheese} </p>
                         </div>
                    </div>
                    <div className="comments-container">
                         <h1> COMMENTS </h1>
                    </div>
               </div>
          );
     }
}

export default Post;
