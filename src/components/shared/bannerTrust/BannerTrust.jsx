import React from 'react'
import styles from './bannerTrust.module.scss'
import { map } from 'lodash'
import { data } from './bannerTrust.data'

const BannerTrust = () => {
    return (
        <section className={styles.barTrust}>
            <div className={styles.content}>
                {
                    map(data, (item) => (
                        <div className={styles.block}>
                            {/* <Icon name={item.icon} /> */}
                            <div>
                                <h5>{item.title}</h5>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default BannerTrust