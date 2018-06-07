import React, { Component } from 'react';
import logo from './logo.svg';
import './comments.css'

class Comments extends Component {
  constructor(){
    super();
    this.state = {
      author: "King Kendrick",
      comment: "This definitely doesn't kill my vibe!"
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

    console.log(obj.author);
    console.log(obj.comment)

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
      <i class="far fa-comment" data-toggle="modal" data-target="#myModal"></i>
        <div id="myModal" className="modal fade" role="dialog">
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