import styles from './cart.module.scss'
const layout = ({ children }) => {
    return (
        <div className={styles.cart}>
            <section>
                {children}
            </section>
        </div>
    )
}

export default layout