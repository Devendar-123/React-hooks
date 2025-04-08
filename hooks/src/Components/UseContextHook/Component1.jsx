import React, { useContext } from 'react'
import { data } from './UseContextHook'
import Component2 from "./Component2"
const Component1 = () => {
    const {detail} = useContext(data)
  return (
    <div>
      <table align='center' className='myTable'>
        <caption>User Information</caption>
        <thead className='tableHead'>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody className='tableBody'>
            {detail.map((item,id)=>(
                <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <Component2/>
    </div>
  )
}

export default Component1
