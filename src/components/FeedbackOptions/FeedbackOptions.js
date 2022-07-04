import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const {good, neutral, bad } = options;
    return (
        <div className={css.buttonsWrapper}>
        <button type="button" className={css.button} onClick={() => onLeaveFeedback(good)}>Good</button>
        <button type="button" className={css.button} onClick={() => onLeaveFeedback(neutral)}>Neutral</button>
        <button type="button" className={css.button} onClick={() => onLeaveFeedback(bad)}>Bad</button>
</div>
)
}

export default FeedbackOptions;