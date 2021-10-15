import React from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const targetBtn = event.target.textContent;
    this.setState(prevState => ({
      [targetBtn]: prevState[targetBtn] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    if (!total) {
      return 0;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const positiveFeedback = Math.round((good / (good + bad + neutral)) * 100);
    return Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="contaiter">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
