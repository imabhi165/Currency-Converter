import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-indigo-200 to-blue-400 animate-gradient-x flex flex-col">
      <Navbar setPage={setPage} />
      <div className="flex-1 flex items-center justify-center">
        <div className="container">
          {page === "home" ? <Home /> : <CurrencyConvertor />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


//bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-800 h-screen