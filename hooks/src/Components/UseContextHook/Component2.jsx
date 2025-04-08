import React, { useContext } from 'react'
import { data } from './UseContextHook'; 
import "./Component2.css"
import Component3 from './Component3';

const Component2 = () => {
    const {detail} = useContext(data);
  return (
    <div>
        <table align='center' className='myTable'>
        <caption>User Information</caption>
        <thead className='tableHead'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
            </tr>
        </thead>

        <tbody className='tableBody'>
            {detail.map((item,id)=>(
                <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <Component3/>
    </div>
  )
}

export default Component2
