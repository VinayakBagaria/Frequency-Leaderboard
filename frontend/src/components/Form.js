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
    error: '',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true, error: '', leaderboardData: {} });

    axios(`/fetchTopList/${this.state.limit}`)
      .then(response => {
        if (Object.keys(response.data).includes('error')) {
          this.setState({
            error: response.data.error,
          });
        } else {
          this.setState({
            leaderboardData: Object.keys(response.data).map(k => (
              { key: k, value: response.data[k] }
            )),
          });
        }
      })
      .catch(() => this.setState({
        error: 'Network error',
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
            inputProps={{ min: '1' }}
          />
        </form>
        <div className="App__table__loader">
          {this.state.error.length > 0 && <h1>{this.state.error}</h1>}
          {this.state.loading ? (
            <Loader />
          ) : (
            Object.keys(this.state.leaderboardData).length !== 0 && (
              <TableLayout leaderboardData={this.state.leaderboardData} />
            )
        )}
        </div>
      </div>
    );
  }
}

export default Form;
