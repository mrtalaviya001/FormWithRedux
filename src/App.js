import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form/>} />
        <Route path="/table" element={<Table/>} />
      </Routes>
      
    </>
  );
}

export default App;
