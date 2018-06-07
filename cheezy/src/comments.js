import React, { Component } from 'react';
import logo from './logo.svg';
import './comments.css'

class Comments extends Component {
  constructor(){
    super();
    this.state = {
      comment: "",
      comments: []
    }
  }

  handleChange(event){
    const comment = event.target.value;
    this.setState({
      comment
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const comment = this.state.comment;
    let updatedComments = this.state.comments;
    updatedComments.push({comment});

    this.setState({
      comments: updatedComments
    })

    let text = this.refs.text;
    text.value = "";
    console.log("This new list of comments: ", this.state.comments);
  }

  render() {
    const comments = this.state.comments;
    const comment = comments.map((list, i) => (<li key={i}>      {list.comment}       </li>));

    return (
      <div className="App">
        <br />
        <form>
          <label>
            Comment: <br /> <br />
            <input onChange={this.handleChange.bind(this)} type="text" name="comment" ref="text" />
          </label>
            <br/><br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>
        </form>
        <ul>
          { (comment) ? comment : null }
        </ul>
      </div>
    );
  }
}

export default Comments;