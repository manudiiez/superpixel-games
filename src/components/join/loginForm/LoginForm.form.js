import * as Yup from 'yup'

export const initialValues = () => {
    return {
        identifier: "",
        password: ""
    }
}

export const validationSchema = () => {
    return Yup.object({
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    })
}
