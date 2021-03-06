import React from 'react'
import { Formik,Field,Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button} from 'react-bootstrap';
import AlertMessages from './alert';

const TransactionsForm = (props) => {
    
    const schema = Yup.object({
        account_id : Yup.string().required('Pleace add account reference'),
        amount : Yup.string().required('Pleace add amount to given reference')
    })
    const fromData = {
        account_id : '',
        amount :''
    }

    const renderError = (message) => <p className="help is-danger">{message}</p>;

    return (
        <>
            <h3>Submit new transaction</h3>
            {props.fromError ? <AlertMessages error={props.fromError.errors} variant={'danger'} /> : ''}
            {props.loading  ? 'Loading...' :
                <Formik
                    initialValues={fromData}
                    validationSchema={schema}
                    onSubmit={async (data, { resetForm }) => {
                        await props.newTransaction(data);
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
            }    
        </>
    )
}
export default TransactionsForm;
