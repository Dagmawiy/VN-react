import React from 'react'
import { Alert, ListGroup } from 'react-bootstrap';
export default function AlertMessages({variant, error, header}) {
    return (
        <Alert variant={variant} >
            <Alert.Heading>{header}</Alert.Heading>
                <ListGroup variant="flush">
                    {
                        error.map( (msg, index) => {
                            return <ListGroup.Item key={index} className={'bg-transparent'}>{msg} </ListGroup.Item>
                        })
                    }
                </ListGroup>
        </Alert>
    );
    
}