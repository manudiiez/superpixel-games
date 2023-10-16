import classNames from 'classnames'
import styles from './discount.module.scss'

const Discount = ({ children, className }) => {
    return (
        <span className={classNames(styles.labelDiscount, { [className]: className })}>
            {children}
        </span>
    )
}

export default Discount