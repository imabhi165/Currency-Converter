import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-800 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;


//bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-800 h-screen