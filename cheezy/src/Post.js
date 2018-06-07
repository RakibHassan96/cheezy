import React, { Component } from 'react';
import './Post.css';
import Comments from "./comments.js"

class Post extends Component {
     constructor(props){
          super(props);
          this.state = {
               author: this.props.postInfoFromApp.author,
               caption: this.props.postInfoFromApp.caption,
               imageUrl: this.props.postInfoFromApp.image_url,
               filter: "none",
               isTempFilter: false,
               tempFilter: "none",
               profileUrl: this.props.postInfoFromApp.profile_image_url,
               likes: 8,
               cheese: 11,
               date: this.props.postInfoFromApp.date,
               comments: [],
               postId: this.props.postInfoFromApp.postId
          }
     }

     handleFilter(color, event) {
          this.setState({
               filter: color
          })
     }

     handleFilter(color, event) {
          this.setState({
               filter: color,
               isTempFilter: false
          })
     }

     handleTempFilter(color, event) {
          const currentFilter = this.state.filter;
          this.setState({
               filter: color,
               isTempFilter: true,
               tempFilter: currentFilter
          })
     }

     undoTempFilter(event){
          if(this.state.isTempFilter){
               const currentFilter = this.state.tempFilter;
               this.setState({
                    filter: currentFilter,
                    isTempFilter: false,
                    tempFilter: "none",
               })
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
          /*const comments = this.state.comments.map((comment,i) => {
          // console.log(comment);
          if(comment !== undefined)
          return <Comments key={i} postInfoFromApp={comment} />
     });*/

     return (
          <div className="Post">
               <div className="Post-header">
                    <p className="author-name"> {this.state.author} </p>
                    <img className="profile-picture" src={this.state.profileUrl} />
               </div>
               <div className="filters-container">
                    <div className="filter-swatch" id="red"
                         onClick={this.handleFilter.bind(this,"red")}
                         onMouseOver={this.handleTempFilter.bind(this,"red")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="orange"
                         onClick={this.handleFilter.bind(this,"orange")}
                         onMouseOver={this.handleTempFilter.bind(this,"orange")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="yellow"
                         onClick={this.handleFilter.bind(this,"yellow")}
                         onMouseOver={this.handleTempFilter.bind(this,"yellow")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="green"
                         onClick={this.handleFilter.bind(this,"green")}
                         onMouseOver={this.handleTempFilter.bind(this,"green")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="blue"
                         onClick={this.handleFilter.bind(this,"blue")}
                         onMouseOver={this.handleTempFilter.bind(this,"blue")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="indigo"
                         onClick={this.handleFilter.bind(this,"indigo")}
                         onMouseOver={this.handleTempFilter.bind(this,"indigo")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="violet"
                         onClick={this.handleFilter.bind(this,"violet")}
                         onMouseOver={this.handleTempFilter.bind(this,"violet")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="black-white"
                         onClick={this.handleFilter.bind(this,"black-white")}
                         onMouseOver={this.handleTempFilter.bind(this,"black-white")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                    </div>
                    <div className="filter-swatch" id="none"
                         onClick={this.handleFilter.bind(this,"none")}
                         onMouseOver={this.handleTempFilter.bind(this,"none")}
                         onMouseOut={this.undoTempFilter.bind(this)}>
                         <p>x</p>
                    </div>
               </div>
                    <div className="picture-filter-container">
                         <img className="picture-image" id={this.state.filter} src={this.state.imageUrl} />
                         <div className="picture-container" id={this.state.filter}></div>
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
                    <Comments commentsInfoFromPost={this.state.postId}/>
               </div>
          </div>
     );
}
}

export default Post;
