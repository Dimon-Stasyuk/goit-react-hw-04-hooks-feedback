import React from "react";
import "./FeedbackOptions.css";

const shortid = require("shortid");

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <button
            name={option}
            className='btn'
            type='button'
            onClick={onLeaveFeedback}
            key={shortid.generate()}>
            {option}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
