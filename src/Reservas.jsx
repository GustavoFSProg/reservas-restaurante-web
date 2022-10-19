import mesa from './assets/mesa.jpeg'
import './App.css'
import { Link } from 'react-router-dom'
import api from './api'
import { useEffect, useState } from 'react'

function Reservas() {
  const [tables, setTables] = useState([])

  async function getTables() {
    const { data } = await api.get('/all-tables')

    setTables(data)
  }

  useEffect(() => {
    getTables()
  }, [])

  return (
    <div className="container">
      <Link
        to="/"
        style={{
          color: 'black',
        }}
      >
        <h2>  HOME </h2>
      </Link>
      <h2>RESERVAR MESAS:</h2>
      <div
        className="App"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          Numero da mesa: <input type="text" />
          Nome do Cliente: <input type="text" />
          Telefone: <input type="text" />
          Status{' '}
          <select>
            <option value="reservada">Reservar</option>
            <option value="liberada">Liberar</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Reservas
