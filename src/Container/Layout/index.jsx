import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import TransactionsForm from '../../Forms/transaction'
import Transaction from '../view/transaction'


const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4}> <TransactionsForm /></Col>
        <Col sm={12} md={8}> <Transaction /></Col>
      </Row>
    </Container>
  )
}
export default Home;
