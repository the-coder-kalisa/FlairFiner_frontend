<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Messaging from "./components/messaging/Messaging";
("./components/signup/Signup");
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup'; './components/signup/Signup';
>>>>>>> origin/main
function App() {
  // const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="chat" element={<Messaging />}></Route>
      </Routes>
    </BrowserRouter>
  );
=======

    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
>>>>>>> origin/main
}

export default App;
