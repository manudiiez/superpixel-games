import { DateTime } from 'luxon';
import styles from './comment.module.scss'
import { useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { Comments } from '@/api/comments';


const Comment = ({ comment, reloadData, restCountComments }) => {
    const username = comment.attributes.user.data.attributes.username
    const userId = comment.attributes.user.data.id
    const { data: session } = useSession()
    const id = session?.user.user.id
    const commentsCtrl = new Comments()

    const deleteComment = async () => {
        const resultSwal1 = await Swal.fire({
            title: '¿Eliminar comentario?',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#ff0a4e",
            confirmButtonText: "Eliminar",
            confirmButtonColor: "#0056C7",
        })
        if (resultSwal1.isConfirmed) {

            const resultSwal2 = await Swal.fire('¡Comentario Eliminado!', '', 'success')
            if (resultSwal2.isConfirmed) {
                try {
                    await commentsCtrl.deleteComment(comment.id, session.user.jwt)
                    reloadData()
                    restCountComments()
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    return (
        <div className={styles.comment}>
            <span>
                {DateTime.fromISO(comment.attributes.updatedAt).minus({ days: 1 }).toRelative()}
                {
                    userId === id && (
                        <div>
                            <button onClick={deleteComment}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    )
                }
            </span>
            <p>De: <span>{username}</span></p>
            <p>{comment.attributes.comment}</p>
        </div>
    )
}

export default Comment