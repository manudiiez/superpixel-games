import styles from './joinLayout.module.scss'


const layout = ({ children }) => {
    return (
        <section className={styles.joinLayout}>
            <div>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default layout