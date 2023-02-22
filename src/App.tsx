import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './components/signup/Signup'; './components/signup/Signup';
function App() {
  // const [count, setCount] = useState(0)

  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='signup' element={<Signup />}> 
    </Route>
     </Routes>
     </BrowserRouter>
    
  )
}

export default App
