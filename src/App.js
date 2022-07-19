import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import AddSong from './pages/AddSong';



function App() {
  return (
    <>
      <div className='App'>

        <Router>

        <NavBar />
        <Home />
        <AddSong />

        <Routes>
          <Route  path="/" elemtent={<Home />} />

          <Route exact path="/addsong" elemtent={<AddSong />} />

        </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
