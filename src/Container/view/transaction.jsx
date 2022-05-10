import React from 'react'
import { Accordion, Card,useAccordionButton, ListGroup, Badge  } from 'react-bootstrap'

export default function Transaction(props) {
 
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

 
  return (
    <>
     {
      props.loading ? 'Loading...' :
      <Accordion defaultActiveKey="0">
          {
            props.transactionHistory.map((res, index) => {
            return <Card key={index}>
                    <Card.Header>
                     
                    <ListGroup as="ul" >
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start border-0"
                        data-type="transaction"
                        data-account-id="{res.transaction_id}"
                        data-amount="{res.amount}"
                        data-balance="balance"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold" >{res.transaction_id}</div>
                          {res.account_id}
                        </div>
                        <Badge bg="" className='text-dark fs-5' pill>
                             {res.amount} $
                        </Badge>
                        <CustomToggle eventKey={index} > Show</CustomToggle>
                      </ListGroup.Item>
                    </ListGroup>
                    
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>{res.account_id} {res.account_id}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
            })
          }
      </Accordion>
    }
    </>
  )
}
