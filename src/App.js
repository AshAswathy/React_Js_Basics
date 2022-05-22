
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from './dashboard';
import Test from './test';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  </BrowserRouter>


    // <div className="App" style={{
    //   textAlign: "center"
    // }}>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Code <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
