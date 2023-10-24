import styles from './loader.module.scss'
const Loader = ({ height, width }) => {
    return (
        <span className={styles.loader} style={{ height: height, width: width }}></span>
    )
}

export default Loader
