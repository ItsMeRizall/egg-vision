import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAkun from "./components/ListAkun";
import Login from "./pages/login";
import Home from "./pages/Home";
import Analytic from "./pages/Analytic";

export default function App() {
  return (
    <div className="bg-[#DCDCDC]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/admin" element={<Login />} />
          <Route path="/analytic/" element={<Analytic />} />
          <Route path="/Listakun" element={<ListAkun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




