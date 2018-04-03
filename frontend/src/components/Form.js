import React from 'react';
import axios from 'axios';
import Loader from '../containers/Loader';
import Table from '../containers/Table';

class Form extends React.Component {
  state = {
    leaderboardData: {},
    loading: false,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    axios(`/fetchTopList/${this.refs.limit.value}`).then(response =>
      this.setState({
        leaderboardData: response.data,
      }));
    this.setState({ loading: false });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="limit">
            Enter the maximum leaderboard count:
            <input type="number" min="1" name="limit" ref="limit" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.loading ? (
          <Loader />
        ) : (
          Object.keys(this.state.leaderboardData).length !== 0 && (
            <Table leaderboardData={this.state.leaderboardData} />
          )
        )}
      </React.Fragment>
    );
  }
}

export default Form;
