import React, { Component } from 'react';
import css from './Feedbacks.module.css'

class Feedbacks extends Component {
    state = {
    good: 0,
    neutral: 0,
        bad: 0,
        total: 0,

    }

    // total: 0;

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

    }

    countPositiveFeedbackPercentage = () => {

    }

    render() {
        return (
            <div className={css.feedbacks}>
                <p className={css.title}>Please leave your feedback</p>
                <div className={css.buttonsWrapper}>
                <button type="button" className={css.button} onClick={this.onGoodBtnClick}>Good</button>
                <button type="button" className={css.button} onClick={this.onNeutralBtnClick}>Neutral</button>
                    <button type="button" className={css.button} onClick={this.onBadBtnClick}>Bad</button>
                    </div>
                <p className={css.title}>Statistics</p>
                <ul className={css.feedbacksList}>
                    <li className={css.feedbacksItem}>
                        <p>Good:</p>
                        <span>{ this.state.good }</span>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Neutral:</p>
                        <span>{ this.state.neutral }</span>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Bad:</p>
                        <span>{ this.state.bad }</span>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Total:</p>
                        <span>{ this.state.total}</span>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Positive feedback:</p>
                        <span></span>
                    </li>

                </ul>

            </div>

        );
    }
}

export default Feedbacks;
