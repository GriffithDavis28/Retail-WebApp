import React from 'react'

export const DisplayBoard = ({numberOfCustomers, getAllCustomers}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'black',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'black'}} className="display-board">
            <h4 style={{color: 'white'}}>customers</h4>
            <div className="number">
            {numberOfCustomers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllCustomers()} className="btn btn-warning">Get all Customers</button>
            </div>
        </div>
    )
}