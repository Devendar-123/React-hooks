import React, { createContext } from 'react'
import Component1 from './Component1';

const data = createContext();//create
const UseContextHook = () => {
    const details = [
        {name:"Devendar", email:"devendar@gmail.com", mobile:"8766754644", city:"Hyderabad",id:1},
        {name:"Ajay", email:"ajay@gmail.com", mobile:"7766754644", city:"Karimnagar",id:2},
        {name:"Jeevan", email:"jeevan@gmail.com", mobile:"9766754644", city:"Mahabubabad",id:3},
        {name:"Pradeep", email:"pradeep@gmail.com", mobile:"9766764644", city:"Khamam",id:4},
        {name:"Pranay", email:"pranay@gmail.com", mobile:"6766754644", city:"Warangal",id:5},
        {name:"Priya", email:"priya@gmail.com", mobile:"9453754644", city:"Hanmakonda",id:6},
        {name:"Karunakar", email:"karunakar@gmail.com", mobile:"8766754644", city:"Vizag",id:7},
        {name:"Kamalakar", email:"kamalakar@gmail.com", mobile:"8966754644", city:"Ananthapur",id:8},
        {name:"Keerthi", email:"keerthi@gmail.com", mobile:"6786754644", city:"Manchiryal",id:9},
        {name:"Ishu", email:"ishu@gmail.com", mobile:"7676754644", city:"Vikarabad",id:10}
    ]
    
  return (
    <div>
      <data.Provider value={{detail:details}}> 
        <Component1/>
      </data.Provider>
    </div>
  )
}

export default UseContextHook
export {data}