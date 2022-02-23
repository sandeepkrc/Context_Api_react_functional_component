import React from 'react'
import { FirstName,LastName } from './Home'

const Childchild = () => {
  return (
    <div>
        <FirstName.Consumer>
            {(cur)=>{
                return (
                    <LastName.Consumer>
                        {(cure)=>{
                            return(<>
                            <h1>Context API Concepts in functional components</h1>
                            <h3>
                            Hi i am {cur} &nbsp;{cure}
                            </h3>
                            </>)
                        }}
                    </LastName.Consumer>
                    
                )
            }}


        </FirstName.Consumer>
        
        </div>
  )
}

export default Childchild