import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import { PizzaProvider } from './context/PizzaContext'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'
import Home from './views/Home'
import { Footer } from './components/Footer'
function App () {
  return (
    <PizzaProvider>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
      <Footer />
    </PizzaProvider>
  )
}
export default App
