import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className={css.feedbacksList}>
                    <li className={css.feedbacksItem}>
                        <p>Good: { good }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Neutral: { neutral }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Bad: { bad }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Total: {total}</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Positive feedback: {positivePercentage}%</p>
                    </li>

                </ul>
    )
}

export default Statistics;