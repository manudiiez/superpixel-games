import classNames from 'classnames'
import styles from './form.module.scss'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './Form.form'
import { useSession } from 'next-auth/react'
import { ENV } from '@/utils/constants'
import { Comments } from '@/api/comments'

const Form = ({ gameId, reloadData, openCLoseShowModal, addCountComments }) => {

    const { data: session } = useSession()
    const commentsCtrl = new Comments()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await commentsCtrl.saveComment(gameId, session.user.user.id, session.user.jwt, formValue)
                reloadData()
                openCLoseShowModal()
                addCountComments()
            } catch (error) {
                console.log(error);
            }
        }
    })


    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <textarea
                name="comment"
                placeholder='Escriba su reseña'
                maxLength='180'
                value={formik.values.comment}
                onChange={formik.handleChange}
                error={formik.errors.comment}>
            </textarea>
            <button type='submit'>Subir</button>
        </form>
    )
}

export default Form