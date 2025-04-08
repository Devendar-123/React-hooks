import React from 'react'
import UsestateHook from './Components/UsestateHook/UsestateHook'
import UseeffectHook from './Components/UseeffectHook/UseeffectHook'
import FetchData from './Components/FetchData/FetchData'
import UseContextHook from './Components/UseContextHook/UseContextHook'

const App = () => {
  return (
    <div>
      <UsestateHook/>
      <UseeffectHook/>
      <FetchData/>
      <UseContextHook/>
    </div>
  )
}

export default App
