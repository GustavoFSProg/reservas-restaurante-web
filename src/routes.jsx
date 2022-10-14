import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

function RoutesAll() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesAll