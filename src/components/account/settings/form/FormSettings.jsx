import { useFormik } from 'formik';
import styles from './formSettings.module.scss'
import { initialValues, validationSchema } from './formSettings.form';
import Swal from 'sweetalert2';
import { signOut } from 'next-auth/react';
import { User } from '@/api/user';


const FormSettings = ({ user, token, userId }) => {

    const userCtrl = new User()
    const formik = useFormik({
        initialValues: initialValues(user.firstname, user.lastname, user.username, user.email),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await Swal.fire({
                    icon: 'warning',
                    title: 'Para editar los datos debemos cerrar la sesión',
                    showCancelButton: true,
                    cancelButtonText: "Cancelar",
                    confirmButtonText: 'Editar',
                })
                if (response.isConfirmed) {
                    await userCtrl.update(userId, token, formValue)
                    signOut()
                }
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div>
                <input
                    name="firstname"
                    type="text"
                    placeholder="Nombre"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.errors.firstname}
                />
                <input
                    name="lastname"
                    type="text"
                    placeholder="Apellido"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
                />
            </div>
            <div>
                <input
                    name="username"
                    type="text"
                    placeholder="Nombre de usuario"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
            </div>

            <button type="submit">Editar usuario</button>
        </form>
    )
}

export default FormSettings