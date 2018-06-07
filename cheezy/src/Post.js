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
               isLiked: false,
               likes: 8,
               cheese: 11,
               date: "",
               comments: []
          }
     }

     toggleLike(event) {
          let liked = this.state.isLiked;
          liked = !liked;
          let numLikes = this.state.likes;
          if (liked){
               numLikes++;
          } else {
               numLikes--;
          }
          this.setState({
               isLiked: liked,
               likes: numLikes
          })
     }

     addCheese(event) {
          let numCheese = this.state.cheese;
          numCheese++;
          this.setState({
               cheese: numCheese
          })
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
                              <div className="button-data-container" id="likes">
                                   <img id={this.state.isLiked ? "liked-button" : "like-button"}
                                        src="like-icon.png" onClick={this.toggleLike.bind(this)}/>
                                   <p className="label"> {this.state.likes} </p>
                              </div>
                              <div className="button-data-container" id="cheese">
                                   <img id="cheese-button" src="cheese-icon.png" onClick={this.addCheese.bind(this)}/>
                                   <p className="label"> {this.state.cheese} </p>
                              </div>
                         </div>
                    </div>
                    <div className="comments-container">
                         <Comments />
                         <h1> COMMENTS </h1>
                    </div>
               </div>
          );
     }
}

export default Post;
