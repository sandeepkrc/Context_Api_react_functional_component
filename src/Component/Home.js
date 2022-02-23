import React, { createContext } from 'react'
import Child from './Child'
const FirstName = createContext();
const LastName = createContext();

const Home = () => {



  return (<>
  <FirstName.Provider value={"Sandeep Kumar "}>

    <LastName.Provider value={"Chaurasia "}>
    <Child/>
    </LastName.Provider>

  </FirstName.Provider>
 
  </>
  )
}

export default Home;
export {FirstName,LastName};