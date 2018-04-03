import React from 'react';

class Form extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    alert(typeof this.refs.limit.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="limit">
          Enter the maximum leaderboard count:
          <input type="number" min="1" name="limit" ref="limit" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
