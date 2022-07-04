import css from './Section.module.css'

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={css.title}>{title}</h2>
            {children}
        </section>
    )

}

export default Section;