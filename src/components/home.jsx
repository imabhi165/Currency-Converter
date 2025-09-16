
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`max-w-2xl mx-auto my-10 p-8 rounded-lg shadow-lg text-center transition-colors duration-300
      ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 text-gray-800"}
    `}>
      <div className="flex justify-end mb-4">
        <button
        //   onClick={() => setDarkMode((prev) => !prev)}
          className={`px-4 py-2 rounded-full font-semibold shadow-md focus:outline-none transition
            ${darkMode ? "bg-gray-700 text-yellow-300 hover:bg-gray-800" : "bg-white text-indigo-700 hover:bg-indigo-100"}`}
        >
          {/* {darkMode ? "🌙" : "☀️"} */}
        </button>
      </div>
      <h1 className={`text-4xl font-bold mb-4 ${darkMode ? "text-yellow-300" : "text-indigo-700"}`}>Welcome to Home Page</h1>
      <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        We have just made a home page for now.<br />
        Here we have only one application running, i.e., Currency Converter.
      </p>
      <p className={`text-md ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        More features and sections will be added soon. Stay tuned!
      </p>
    </div>
  );
};

export default Home;
