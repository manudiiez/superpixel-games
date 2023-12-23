"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './comments.module.scss'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Comment from './comment/Comment'
import { has, map, size } from 'lodash'
import classNames from 'classnames'
import Form from './form/Form'
import FullModal from '@/components/shared/fullModal/FullModal'
import { Comments } from '@/api/comments'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NoResults from '@/components/shared/noResults/NoResults'

const CommentsList = ({ comments, gameId }) => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const commentsCtrl = new Comments()
    const [showList, setShowList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataLoad, setDataLoad] = useState(comments);
    const [hasItems, setHasItems] = useState(size(comments));
    const openCLoseShowList = () => setShowList(!showList)
    const openCLoseShowModal = () => {
        if (status === 'authenticated') {
            setShowModal(!showModal)
        } else {
            router.push('join/sign-in')
        }
    }
    const reloadData = async () => {
        try {
            setDataLoad(await commentsCtrl.getGameComments(gameId))
        } catch (error) {
            console.log(error);
        }
    }

    const restCountComments = () => {
        setHasItems(hasItems - 1)
    }
    const addCountComments = () => {
        setHasItems(hasItems + 1)
    }
    return (
        <section className={styles.comments}>
            <div className={styles.content}>
                <div className={styles.commentsHeader} onClick={openCLoseShowList}>
                    <h5>COMENTARIOS</h5>
                    {
                        hasItems < 1 ? (
                            <button onClick={openCLoseShowModal}>
                                Añadir
                            </button>
                        ) : (
                            <div>
                                <span>{showList ? 'ocultar' : 'mostrar'}</span>
                                <FontAwesomeIcon icon={faAngleRight} className={showList ? styles.isActive : ''} />
                            </div>

                        )
                    }
                </div>
                {
                    hasItems < 1 ? (
                        <div>
                            <NoResults />
                        </div>
                    ) : (

                        <div className={classNames(styles.commentsList, {
                            [styles.isActive]: showList
                        })}>
                            {
                                map(dataLoad, (item) => (
                                    <div key={item.id}>
                                        <Comment comment={item} reloadData={reloadData} restCountComments={restCountComments} />
                                    </div>
                                ))
                            }
                            <div className={styles.buttonAdd} onClick={openCLoseShowModal}>
                                <button>Subir un comentario</button>
                            </div>
                            <div className={classNames(styles.commentSeparator, {
                                [styles.active]: hasItems > 2
                            })} onClick={openCLoseShowList}>
                                Ver mas
                            </div>
                        </div>
                    )
                }
            </div>
            <FullModal show={showModal} onClose={openCLoseShowModal}>
                <Form gameId={gameId} reloadData={reloadData} openCLoseShowModal={openCLoseShowModal} addCountComments={addCountComments} />
            </FullModal>
        </section>
    )
}

export default CommentsList