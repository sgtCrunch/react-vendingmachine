import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Snack from "./Snack";
import VendingMachine from './VendingMachine';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/snack/:name" element={<Snack/>} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
