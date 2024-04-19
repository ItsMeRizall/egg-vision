import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAkun from "./components/ListAkun";
import Login from "./pages/login";
import Home from "./pages/Home";
import Analytic from "./pages/Analytic";
import Admin from "./pages/Admin/Admin";
import ResultAnalis from "./pages/ResultAnalis";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="bg-[#DCDCDC]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/result" element={<ResultAnalis />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/admin" element={<Admin />} />
          <Route path="/analytic/" element={<Analytic />} />
          <Route path="/Listakun" element={<ListAkun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




