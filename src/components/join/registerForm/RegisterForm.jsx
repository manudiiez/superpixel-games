"use client"
import styles from './registerForm.module.scss'
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterForm.form"
import { useRouter } from "next/navigation"

const RegisterForm = () => {

    const router = useRouter()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await fetch('http://localhost:3000/api/join/sign-up', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formValue),
                });
                router.push('/join/sign-in')
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
            <input
                name="email"
                type="text"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
            />
            <input
                name="username"
                type="text"
                placeholder="Nombre de usuario"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.errors.username}
            />
            <input
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <button type="submit">Crear cuenta</button>
        </form>
    )
}

export default RegisterForm