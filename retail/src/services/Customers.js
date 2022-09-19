import React from 'react'

export const Customers = ({customers}) => {

    console.log('Customers length:::', customers.length)
    if (customers.length === 0) return null

    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{customer.customerNumber}</td>
                  <td>{customer.contactFirstName}</td>
                  <td>{customer.contactLastName}</td>
              </tr>
          )
    }

    const customerTable = customers.map((customer,index) => CustomerRow(customer,index))

    return(
        <div className="container">
            <h2>Customers</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>customer Id</th>
                    <th>FirstName</th>
                    <th>Lastname</th>
                </tr>
                </thead>
                <tbody>
                    {customerTable}
                </tbody>
            </table>
        </div>
    )
}