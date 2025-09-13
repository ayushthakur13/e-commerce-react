import {Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { LoginPage } from './pages/LoginPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
