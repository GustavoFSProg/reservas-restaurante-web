import mesa from './assets/mesa.jpeg'
import './App.css'
import { Link } from 'react-router-dom'
import api from './api'
import { useEffect, useState } from 'react'

function App() {
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
      <h1>Sistema de reservas:</h1>
      <div className="App">
        {tables.map((item) => {
          return (
            <div key={item.id}>
              <Link
                to="/"
                style={{
                  color: 'black',
                }}
                onClick={() => alert('Mesa 1 Reservada')}
              >
                <img src={mesa} className="logo-mesa" alt="React logo" />
                <p>
                  <h2>{item.number}</h2>

                  Status: {item.status}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
