import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    leaderboardData: {},
  };
  handleSubmit = e => {
    e.preventDefault();
    axios(`/fetchTopList/${this.refs.limit.value}`).then(response =>
      this.setState({
        leaderboardData: response.data,
      }));
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
