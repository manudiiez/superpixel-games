import classNames from 'classnames'
import styles from './form.module.scss'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './Form.form'
import { useSession } from 'next-auth/react'

const Form = ({ gameId, reloadData, openCLoseShowModal }) => {

    const { data: session } = useSession()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await fetch(`http://localhost:3000/api/comments/${gameId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Id": session.user.user.id,
                        "Authorization": `Bearer ${session.user.jwt}`
                    },
                    body: JSON.stringify(formValue),
                });
                reloadData()
                openCLoseShowModal()
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