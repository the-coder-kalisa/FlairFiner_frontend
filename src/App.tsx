import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Messaging from "./components/messaging/Messaging";
import Categories from "./components/categories/Categories";
import Login from "./components/Login/Login";
("./components/signup/Signup");
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="chat" element={<Messaging />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
