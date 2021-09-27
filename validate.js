
export const validate = (values) => {
    let errors = {}
    if (!values.name) {
        errors.name = "required"
    }

    if (!values.email) {
        errors.email = "required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "invalid email format"
    }

    if (!values.password) {
        errors.password = "required"
    }
    else if (values.password.length < 4) {
        errors.password = "password length is too short"
    }

    if (!values.phone) {
        errors.phone = "required"
    }



    return errors

}