import classNames from 'classnames'
import styles from './fullModal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
const FullModal = ({ children, show, onClose }) => {
    return (
        <div className={classNames(styles.fullModal, {
            [styles.isActive]: show
        })}>
            <div className={styles.bg} onClick={onClose}></div>
            <div className={styles.content}>
                <FontAwesomeIcon icon={faX} className={styles.close} onClick={onClose} />
                {children}
            </div>
        </div>
    )
}

export default FullModal