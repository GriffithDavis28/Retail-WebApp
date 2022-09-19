import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './services/Header';
import { Customers } from './services/Customers';
import { DisplayBoard } from './services/DisplayBoard';
import CreateCustomer from './services/CreateCustomer';
import { getAllCustomers, createCustomer } from './services/CustomerService';

function App() {

  const [Customer, setCustomer] = useState({})
  const [customers, setCustomers] = useState([])
  const [numberOfCustomers, setNumberOfCustomers] = useState(0)


  const CustomerCreate = (e) => {

      createCustomer(Customer)
        .then(response => {
          console.log(response);
          setNumberOfCustomers(numberOfCustomers+1)
      });
  }

  const fetchAllCustomers = () => {
    getAllCustomers()
      .then(Customers => {
        console.log(Customers)
        setCustomers(Customers);
        setNumberOfCustomers(Customers.length)
      });
  }

  useEffect(() => {
    getAllCustomers()
      .then(Customers => {
        console.log(Customers)
        setCustomers(Customers);
        setNumberOfCustomers(Customers.length)
      });
  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          Customer.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          Customer.lastName = e.target.value;
      } 
      setCustomer(Customer)
  }
  
    
    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateCustomer 
                    Customer={Customer}
                    onChangeForm={onChangeForm}
                    createCustomer={CustomerCreate}
                    >
                  </CreateCustomer>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfCustomers={numberOfCustomers}
                    getAllCustomers={fetchAllCustomers}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Customers customers={customers}></Customers>
          </div>
        </div>
    );
}

export default App;