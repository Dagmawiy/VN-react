import React, {useState} from 'react'
import { Formik,Field,Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button} from 'react-bootstrap';
import AlertMessages from './alert';
import Create from '../Actions/Transaction/post';
import Update from '../Actions/Transaction/get';
const TransactionsForm = (props) => {
    const [isLoading, setLoading] = useState();
    const [errors, setErrors] = useState()
    const schema = Yup.object({
        account_id : Yup.string().required('Pleace add account reference'),
        amount : Yup.string().required('Pleace add amount to given reference')
    })
    const fromData = {
        account_id : '',
        amount :''
    }

    const renderError = (message) => <p className="help is-danger">{message}</p>;

    const onSubmit = (data) => {
        setLoading(true);
        Create(data).then(res => { //5ae0ef78-e902-4c40-9f53-8cf910587312
            if(!res.success)
                setErrors(res.error.errors);
            setLoading(false);
            Update().then(res => {
                console.log(res)
            });
        })
    }
    return (
        <>
            <h3>Submit new transaction</h3>
            {errors ? <AlertMessages error={errors} variant={'danger'} /> : ''}
            {!isLoading ? 
                <Formik
                    initialValues={fromData}
                    validationSchema={schema}
                    onSubmit={async (data, { resetForm }) => {
                        await onSubmit(data);
                        resetForm();
                    }}
                >
                <Form>
                    <label htmlFor="inputAccountID">Account id</label>
                    <Field
                        type="text"
                        id="inputAccountID"
                        data-type="account-id"
                        name="account_id"
                        placeholder="Account reference"
                        className="form-control mb-3"
                        aria-describedby="inputAccountIDHelpBlock"
                    />
                    <ErrorMessage name="account_id" render={renderError} />
                    <label htmlFor="inputAmount">Amount</label>
                    <Field
                        type="text"
                        id="inputAmount"
                        data-type="amount"
                        name="amount"
                        className="form-control mb-3"
                        placeholder="Amount"
                        aria-describedby="AmountHelpBlock"
                    />
                    <ErrorMessage name="amount" render={renderError} />
                    <Button data-type="transaction-submit" type="submit" 
                            variant="dark mt-3 w-100 py-2" 
                            >Submit
                            </Button>
                </Form>
                
                </Formik>
            : 'Loading...'}    
        </>
    )
}
export default TransactionsForm;
