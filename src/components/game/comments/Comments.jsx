"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './comments.module.scss'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Comment from './comment/Comment'
import { map } from 'lodash'
import classNames from 'classnames'
import Form from './form/Form'
import FullModal from '@/components/shared/fullModal/FullModal'

const Comments = ({ data, gameId }) => {

    const [showList, setShowList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataLoad, setDataLoad] = useState(data);
    const openCLoseShowList = () => setShowList(!showList)
    const openCLoseShowModal = () => setShowModal(!showModal)
    const reloadData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/comments/${gameId}`)
            setDataLoad(await response.json())
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles.comments}>
            <div>
                <div className={styles.commentsHeader} onClick={openCLoseShowList}>
                    <h5>COMENTARIOS</h5>
                    <div>
                        <span>{showList ? 'ocultar' : 'mostrar'}</span>
                        <FontAwesomeIcon icon={faAngleRight} className={showList ? styles.isActive : ''} />
                    </div>
                </div>

                <div className={classNames(styles.commentsList, {
                    [styles.isActive]: showList
                })}>
                    {
                        map(dataLoad, (item) => (
                            <div key={item.id}>
                                <Comment comment={item} reloadData={reloadData} />
                            </div>
                        ))
                    }
                    <div onClick={openCLoseShowModal}>
                        <button>Subir un comentario</button>
                    </div>
                    <div className={styles.commentSeparator} onClick={openCLoseShowList}>
                        Ver mas
                    </div>
                </div>
            </div>
            <FullModal show={showModal} onClose={openCLoseShowModal}>
                <Form gameId={gameId} reloadData={reloadData} openCLoseShowModal={openCLoseShowModal} />
            </FullModal>
        </section>
    )
}

export default Comments