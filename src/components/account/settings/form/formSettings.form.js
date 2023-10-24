import * as Yup from 'yup'

export const initialValues = (firstname, lastname, username, email) => {
    return {
        firstname,
        lastname,
        username,
        email
    }
}

export const validationSchema = () => {
    return Yup.object({
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
        username: Yup.string().required(true),
        email: Yup.string().email().required(true),
    })
}
