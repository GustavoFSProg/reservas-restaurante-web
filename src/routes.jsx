import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Reservas from './Reservas'

function RoutesAll() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/reservas" exact element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesAll