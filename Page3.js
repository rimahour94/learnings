import React, { useRef, useState } from 'react';
import Inputt from "./Input"
import { useFormik } from 'formik';
import { Card, CardHeader, Button, CardBody, CardTitle, Form, Media, FormText } from 'reactstrap'
import { validate } from './validate';

// import { validate } from '@babel/types';


function Page3(props) {
    const profilePicRef = useRef();
    // const [values, setValues] = useState({ name: '', email: '', password: '', phone: '' })

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(values)

    //     setTimeout(() => {
    //         setValues({ name: '', email: '', password: '', phone: '' })
    //     }, 2000);
    // }

    // const handleBlur = (e) => {

    //     let errors = {}
    //     if (!values.name) {
    //         errors.name = "required"
    //     }
    //     else if (!values.email) {
    //         errors.email = "required"
    //     }

    //     console.log(errors)
    // }

    const formik = useFormik({
        initialValues: { name: '', email: '', password: '', phone: '' },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            setTimeout(() => {
                resetForm({ values: '' })
            }, 2000);

        },
        validate: (values) => validate(values)

    })

    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>New Form</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form id="form" onSubmit={formik.handleSubmit}>

                        <Inputt
                            label='name'
                            inputType="text"
                            inputName="name"
                            handleBlur={formik.handleBlur}
                            value={formik.values.name}
                            handleChange={formik.handleChange}


                        />
                        {(formik.errors.name && formik.touched.name) ? <FormText className="danger">{formik.errors.name}</FormText> : null}
                        <Inputt
                            label="email"
                            inputType="email"
                            inputName="email"
                            handleBlur={formik.handleBlur}
                            value={formik.values.email}
                            handleChange={formik.handleChange}
                        />
                        {(formik.errors.email && formik.touched.email) ? <FormText className="danger">{formik.errors.email}</FormText> : null}
                        <Inputt
                            label="Password"
                            inputType="password"
                            inputName="password"
                            handleBlur={formik.handleBlur}
                            value={formik.values.password}
                            handleChange={formik.handleChange}
                        />
                        {(formik.errors.password && formik.touched.password) ? <FormText className="danger">{formik.errors.password}</FormText> : null}
                        <Inputt
                            label="Phone"
                            inputType="tel"
                            inputName="phone"
                            handleBlur={formik.handleBlur}
                            value={formik.values.phone}
                            handleChange={formik.handleChange}
                        />
                        {(formik.errors.phone && formik.touched.phone) ? <FormText className="danger">{formik.errors.phone}</FormText> : null}
                        <div className="d-flex justify-content-center">
                            <Button color="primary" type="submit" style={{ marginTop: "20px" }}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </React.Fragment >
    );
}

export default Page3;