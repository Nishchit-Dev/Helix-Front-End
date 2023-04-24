import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import User from "./components/User/User";
import SignUp from "./components/User/Signup";
import "./AppDefault.css";
import { QrScanner } from "./components/QrReader/QR_page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/scan" element={<QrScanner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
