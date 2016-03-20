import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  onTitleChange(e) {
    console.log(e.target.value)
    this.setState({ title: e.target.value });
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const title = this.state.title.trim();
    const body = this.state.body.trim();
    if (!title || !body) return;
    this.props.post(JSON.stringify({ post: { title, body } }));
  }

  render() {
    return (
      <div className="post-form">
          <input
            type="text"
            className="post-form__input"
            onChange={this.onTitleChange.bind(this)}
            ref="title"
            placeholder="title"
          />
          <textarea
            ref="body"
            className="post-form__textarea"
            onChange={this.onBodyChange.bind(this)}
            placeholder="body"
          />
          <input type="submit" onClick={this.onSubmit.bind(this)} value="Post" />
      </div>
    );
  }
}
