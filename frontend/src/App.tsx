import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blogs from './pages/Blogs'
import { Dashboard } from './pages/Dashboard'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      {/* todo : have to remove this instead of this we render a homepage */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/blogs:id' ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
