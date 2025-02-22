import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
 import Home  from './pages/Home/Home';
//import Watch from './pages/watch/Watch';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
                <Route exact path='Netflix/Login' element={<Login></Login>}></Route>
                <Route exact path='Netflix/Home' element={<Home></Home>}></Route>
                <Route exact path='Netflix/' element={<Register></Register>}></Route>
        </Routes>
    </Router>
      
    </div>
  );
}

export default App;
