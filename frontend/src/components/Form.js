import React from 'react';

const Form = () => (
  <form>
    <label htmlFor="limit">
      Enter the maximum leaderboard count:
      <input type="number" min="1" name="limit" />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default Form;
