import React, { Component } from 'react';
import css from './Feedbacks.module.css';

import Notification from './Notification';

class Feedbacks extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }

    onGoodBtnClick = () => {
        this.setState({ good: this.state.good + 1 });
        this.setState({ total: this.state.total + 1 });
    }
    onNeutralBtnClick = () => {
        this.setState({ neutral: this.state.neutral + 1 });
        this.setState({ total: this.state.total + 1 });

    }
    onBadBtnClick = () => {
        this.setState({ bad: this.state.bad + 1 });
        this.setState({ total: this.state.total + 1 });

}
    countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
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
            <div className={css.feedbacks}>
                <h2 className={css.title}>Please leave your feedback</h2>
                <div className={css.buttonsWrapper}>
                <button type="button" className={css.button} onClick={this.onGoodBtnClick}>Good</button>
                <button type="button" className={css.button} onClick={this.onNeutralBtnClick}>Neutral</button>
                <button type="button" className={css.button} onClick={this.onBadBtnClick}>Bad</button>
            </div>
                <h2 className={css.title}>Statistics</h2>
                {totalFeedbacks === 0 ? 
                <Notification message="There is no feedback"></Notification>
                : (
                <ul className={css.feedbacksList}>
                    <li className={css.feedbacksItem}>
                        <p>Good: { this.state.good }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Neutral: { this.state.neutral }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Bad: { this.state.bad }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Total: {totalFeedbacks}</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Positive feedback: {positivePersentage}%</p>
                    </li>

                </ul>
                )}
                

            </div>

        );
    }
}

export default Feedbacks;
