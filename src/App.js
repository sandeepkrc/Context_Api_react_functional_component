import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div style={{ maxWidth : "30rem",margin : "4rem auto"}}>
   
         <BrowserRouter>
             
             <Routes>
               <Route path= "/" element={<Home/>}/>
             </Routes>

         </BrowserRouter>
        
    
      </div>
  
  );
}

export default App;
 

