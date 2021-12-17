import {Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import {useSearchParams} from "react-router-dom";

interface IValues {
    value: string
}


export const Search = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('value'));

    const onSubmitHandler = (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        const {value} = values
        console.log(values);
        if (value) {
            setSearchParams({value});
        }
        formikHelpers.setSubmitting(false);

    };


    return (
        <div>
            <h2>Search</h2>
            <Formik initialValues={{ value: ''}}
                    onSubmit={onSubmitHandler}
            >
                <Form>
                    <Field name='value' type='text' autoComplete="off"/>
                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>
    )
}