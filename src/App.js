import "./App.css";
import React,{useState,useEffect} from "react";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/boards")
      .then((response) => response.json())
      .then((data) => {
          setBackendData(data.boards);
      });
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
        <Route path="/:activeBoard" element={<Board backendData={backendData}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
