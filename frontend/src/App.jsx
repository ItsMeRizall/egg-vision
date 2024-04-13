import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAkun from "./components/ListAkun";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListAkun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




