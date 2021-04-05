import './App.css';
import Calculator from "./Calculator.js";

const App = () => {
  return (
    <div className="app">
      <div className="screen">
      <h1 className="app-title">Calculator Application</h1>
      <Calculator />
      </div>
    </div>
  );
}

export default App;
