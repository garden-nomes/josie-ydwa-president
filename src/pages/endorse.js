import React from 'react';

const Endorse = () => (
  <div>
    <h1>Endorse Josie</h1>

    <form
      name="endorse"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label for="email">Your email</label>
        <input type="text" name="email" />
      </p>
      <p>
        <label for="name">Your name</label>
        <input type="text" name="name" />
      </p>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Endorse;
