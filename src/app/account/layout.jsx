import Separator from '@/components/shared/separator/Separator'
import styles from './account.module.scss'
import Info from '@/components/account/info/Info'
import Tabs from '@/components/account/tabs/Tabs'


const layout = ({ children }) => {
    return (
        <div className={styles.account}>
            <div>
                <Info />
                <Separator height={50} />
                <div>
                    <Tabs />
                    <Separator height={10} />
                    <div>
                        {children}
                    </div>
                    <Separator height={50} />
                </div>
            </div>
        </div>
    )
}

export default layout