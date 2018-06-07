import React, { Component } from 'react';
import logo from './logo.svg';
import './comments.css'

class Comments extends Component {
  constructor(){
    super();
    this.state = {
      comments: [
        {
          author: "King Kendrick",
          comment: "This definitely doesn't kill my vibe!"
        },
        {
          author: "J Cole",
          comment: "Bro, you're so much better than me!"
        },
      ]
    }
  }

  handleAuthor(event){
    const author = event.target.value;
    this.setState({
      author
    })
  }

  handleComment(event){
    const comment = event.target.value;
    this.setState({
      comment
    })
  }

  handleSubmit(event){
    event.preventDefault();
    var obj = {
      author: this.state.author,
      comment: this.state.comment
    };

    this.props.appCallback(obj);

    // console.log(obj.author);
    // console.log(obj.comment)

    // event.preventDefault();
    // const comment = this.state.comment;
    // let updatedComments = this.state.comments;
    // updatedComments.push({comment});

    // this.setState({
    //   comments: updatedComments
    // })

    // let text = this.refs.text;
    // text.value = "";
    // console.log("This new list of comments: ", this.state.comments);
  }

  render() {
    return (
      <div className="AddComment">
        <div>
          <p> <strong>{this.state.comments[this.state.comments.length-1].author}</strong> {this.state.comments[this.state.comments.length-1].comment} </p>
          <p> <strong>{this.state.comments[this.state.comments.length-2].author}</strong> {this.state.comments[this.state.comments.length-2].comment} </p>
        </div>
        <i class="far fa-comment" data-toggle="modal" data-target="#myModal2" id="commentIcon"></i>
        <div id="myModal2" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form>
                  <label>
                    Author: <input onChange={this.handleAuthor.bind(this)} type="text" /> <br />
                    Comment: <input onChange={this.handleComment.bind(this)} type="text" />
                  </label>
                    <br/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} data-dismiss="modal"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;