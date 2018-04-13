import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Loader from '../containers/Loader';
import TableLayout from './TableLayout';
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
        leaderboardData: Object.keys(response.data).map(k => (
          { key: k, value: response.data[k] }
        )),
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
            <TableLayout leaderboardData={this.state.leaderboardData} />
          )
        )}
      </div>
    );
  }
}

export default Form;
