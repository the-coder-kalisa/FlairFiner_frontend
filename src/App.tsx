import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Messaging from "./components/messaging/Messaging";
import Categories from "./components/categories/Categories";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/Login/Login";
("./components/signup/Signup");
import Events from "./components/events/Events";
import Dashboard from "./pages/Dashboard";
import Vid from "./components/video/vid";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="categories" element={<Categories />} />
          <Route path="events" element={<Events numEvents={5} />} />
          <Route path="onelive" element={<Vid />}/>
        </Route>
        
        <Route path="signup" element={<Signup />}></Route>
        <Route path="chat" element={<Messaging />}></Route>
        <Route path="login" element={<Login />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
