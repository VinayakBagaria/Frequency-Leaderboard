import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ leaderboardData }) => (
  <table>
    <thead>
      <tr>
        <th>Word</th>
        <th>Frequency Count</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(leaderboardData).map(item => (
        <tr key={item}>
          <td>{item}</td>
          <td>{leaderboardData[item]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  leaderboardData: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Table;
