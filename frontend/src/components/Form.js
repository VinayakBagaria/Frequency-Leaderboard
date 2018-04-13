import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Loader from '../containers/Loader';
import Table from '../containers/Table';
import './index.css';

class Form extends React.Component {
  state = {
    limit: 1,
    leaderboardData: {},
    loading: false,
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    axios(`/fetchTopList/${this.state.limit}`).then(response =>
      this.setState({
        leaderboardData: response.data,
      }));
    this.setState({ loading: false });
  };

  render() {
    return (
      <div className="App__body">
        <form onSubmit={this.handleSubmit} className="App__form">
          <TextField
            id="number"
            label="Max leaderboard count:"
            value={this.state.limit}
            onChange={this.handleChange('limit')}
            fullWidth
            type="number"
            margin="normal"
          />
        </form>
        {this.state.loading ? (
          <Loader />
        ) : (
          Object.keys(this.state.leaderboardData).length !== 0 && (
            <Table leaderboardData={this.state.leaderboardData} />
          )
        )}
      </div>
    );
  }
}

export default Form;
