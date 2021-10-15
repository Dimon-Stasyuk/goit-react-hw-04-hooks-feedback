import React from "react";
import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default function App() {
  const buttons = ["good", "neutral", "bad"];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (event) => {
    switch (event.target.name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    if (!total) {
      return 0;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((good / (good + bad + neutral)) * 100);
    return Math.round(positiveFeedback);
  };

  return (
    <div className='contaiter'>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={buttons} onLeaveFeedback={leaveFeedback} />
      </Section>

      <Section title='Statistic'>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message='No feedback given' />
        )}
      </Section>
    </div>
  );
}
