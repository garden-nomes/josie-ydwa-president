import React, { Component } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class EndorseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { afterSubmit } = this.props;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'endorse', ...this.state })
    })
      .then(afterSubmit)
      .catch(e => console.error(e));

    event.preventDefault();
  }

  render() {
    return (
      <form
        name="endorse"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <p hidden>
          <label>
            Don't fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>

        <p>
          <label for="name" required>
            Name*
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            required
          />
        </p>

        <p>
          <label for="title">
            Former titles with the YDWA (if comfortable/applicable)
          </label>
          <input type="text" name="title" onChange={this.handleChange} />
        </p>

        <p>* Required</p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default EndorseForm;
