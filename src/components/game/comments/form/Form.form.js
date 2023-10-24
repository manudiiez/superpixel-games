import * as Yup from 'yup'

export const initialValues = () => {
    return {
        comment: "",
    }
}

export const validationSchema = () => {
    return Yup.object({
        comment: Yup.string().required(true).max(180, "El nombre no puede superar los 100 carácteres"),
    })
}
