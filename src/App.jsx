import './App.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>

        </Routes>
      </main>

    </div>
  )
}

export default App;

