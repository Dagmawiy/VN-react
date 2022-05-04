import React from 'react'
import { Formik } from "formik";
import {Form, Button} from 'react-bootstrap'
export default function Transaction() {
  return (
    <>
        <h3>Submit new transaction</h3>
        <Form>
            <Form.Label htmlFor="inputAccountID">Account id</Form.Label>
            <Form.Control
                type="text"
                id="inputAccountID"
                data-type="account-id"
                aria-describedby="inputAccountIDHelpBlock"
            />
            <Form.Label htmlFor="inputAmount">Amount</Form.Label>
            <Form.Control
                type="text"
                id="inputAmount"
                data-type="amount"
                aria-describedby="AmountHelpBlock"
            />
            <Button data-type="transaction-submit" type="submit" 
                    variant="dark mt-3 w-100 py-2">Submit</Button>
        </Form>
    </>
  )
}
