import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

     constructor(){
          super();
          this.state = {
               author: "author",
               caption: "I went to the beach",
               imageUrl: "",
               profileUrl: "",
               likes: 0,
               cheese: 0,
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
                         <img src={this.state.imageUrl} />
                    </div>
                    <div className="captions-actions-container">
                         <div className="caption-container">
                              <p className="caption-label"> {this.state.caption} </p>
                         </div>
                         <div className="actions-container">
                              <button className="like-button"></button>
                              <button className="cheese-button"></button>
                         </div>
                    </div>

               </div>
          );
     }
}

export default Post;
