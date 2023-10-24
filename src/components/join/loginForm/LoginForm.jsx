"use client"
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './LoginForm.form';
import { signIn } from "next-auth/react";
import styles from './loginForm.module.scss'



const LoginForm = () => {


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await signIn("credentials", {
                    ...formValue,
                    redirect: true,
                    callbackUrl: '/'
                });
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                name="identifier"
                type="text"
                placeholder="Username o email"
                value={formik.values.identifier}
                onChange={formik.handleChange}
                error={formik.errors.identifier}
            />
            <input
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <button type="submit">Iniciar sesion</button>
        </form>
    )
}

export default LoginForm