import React, { Component } from "react";
import Notification from "components/Notification";
import Section from "components/Section"
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import css from './App.module.css';

class App extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onFeedbackBtnClick = (option) => {
    const { good, neutral, bad } = this.state;

    if (option === good) {
      this.setState({ good: this.state.good + 1 });
      return;
    } if (option === neutral) {
      this.setState({ neutral: this.state.neutral + 1 });
      return;

    } if (option === bad) { 
      this.setState({ bad: this.state.bad + 1 });
      return;
    } 
      this.setState({ total: this.state.total + 1 });


// switch (option) {
//   case good:
//     this.setState({ good: this.state.good + 1 });
//     this.setState({ total: this.state.total + 1 });
//     break;
//   case neutral:
//     this.setState({ neutral: this.state.neutral + 1 });
//     this.setState({ total: this.state.total + 1 });
//     break;
//   case bad:
//     this.setState({ bad: this.state.bad + 1 });
//     this.setState({ total: this.state.total + 1 });
//     break;
// }
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));
    return positivePercentage;
    }

    render() {
        const totalFeedbacks = this.countTotalFeedback();
        const positivePersentage = this.countPositiveFeedbackPercentage()

      return (
          <div className={css.container}>
          <div className={css.feedbacks}>
            <Section title="Please leave your feedback">
            <FeedbackOptions options={this.state} onLeaveFeedback={this.onFeedbackBtnClick} />
            </Section>
            <Section title="Statistics">
      {totalFeedbacks === 0 ? 
                <Notification message="There is no feedback" />
              : (                
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedbacks} positivePercentage={positivePersentage} />
  )}
            </Section>
      
          </div>
          </div>
        );
    }
}


export default App;