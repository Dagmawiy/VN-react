import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import TransactionFrom from '../../Forms/Transaction'
const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4}> <TransactionFrom /></Col>
        <Col sm={12} md={8}> List</Col>
      </Row>
    </Container>
  )
}
export default Home;
