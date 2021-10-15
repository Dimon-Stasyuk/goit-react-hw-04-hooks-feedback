import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>
        <span>Positive feedback: </span>
        {positivePercentage() ? positivePercentage() : ' 0'}%
      </li>
    </ul>
  );
};

export default Statistics;
