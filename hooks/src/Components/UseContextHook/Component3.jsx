import React, { useContext } from 'react'
import { data } from './UseContextHook'
const Component3 = () => {
    const {detail} = useContext(data);
  return (
    <div>
     
      <table align='center' className='myTable'>
        <caption>User Information</caption>
        <thead className='tableHead'>
            <tr>
                <th>Mobile</th>
                <th>City</th>
            </tr>
        </thead>

        <tbody className='tableBody'>
            {detail.map((item,id)=>(
                <tr key={id}>
                    <td>{item.mobile}</td>
                    <td>{item.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Component3
