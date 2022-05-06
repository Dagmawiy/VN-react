import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TransactionsForm from '../../Forms/transaction';
import Transaction from '../view/transaction';
import Create from '../../Actions/Transaction/post';
import Update from '../../Actions/Transaction/get';
import AlertMessages from '../../Forms/alert';
const Home = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isLoading, setLoading] = useState();
  const [errors, setErrors] = useState()
  const onSubmit = (data) => {
    setLoading(true);
    Create(data).then(res => { //5ae0ef78-e902-4c40-9f53-8cf910587312
        if(!res.success)

            setErrors(res.error.data);
           
            Update().then(() => {
              setTransactionHistory(JSON.parse(localStorage.transaction).data);
            });

            setLoading(false);
    })
  }

  useEffect(() => {
    let isMounted = true;
    setLoading(true)
    if(localStorage.transaction){
      setTransactionHistory(JSON.parse(localStorage.transaction).data); isMounted = false;
    }else{ 
      setTransactionHistory([]);
    }
    setLoading(false)
    return () => {
      isMounted = false
    }
  }, [])


  return (
    <Container>
      <Row>
        <Col sm={12} md={4}> <TransactionsForm  
                                  newTransaction={onSubmit}
                                  loading={isLoading}
                                  fromError={errors}
                             /></Col>
        <Col sm={12} md={8}> <Transaction transactionHistory={transactionHistory} /></Col>
      </Row>
    </Container>
  )
}
export default Home;
