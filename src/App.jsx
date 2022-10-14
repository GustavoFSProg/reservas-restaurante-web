import mesa from './assets/mesa.jpeg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="container">
      <h1>Sistema de reservas:</h1>
    <div className="App">

        <div>

          <Link to="/" style={{
            color: 'black',

          }} onClick={() => alert("Mesa 1 Reservada")}>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>1</h2>

          RESERVA: 
          <br />
          Nome: Arlindo Cruz
          <br />
          Telefone: 6969-66696

            </p>
          </Link>

      </div>
      <div>
          <Link to="/" style={{
            color: 'black',

          }} onClick={() => alert("Mesa 2 Reservada")}>
        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>2</h2>

          RESERVA:
          <br />
          Nome: Maria Prado
          <br />
          Telefone: 6969-66696

            </p>
          </Link>

      </div>
      <div>
          <Link to="/" style={{
            color: 'black',

          }} onClick={() => alert("Mesa 3 Reservada")}>
        <img src={mesa} className="logo-mesa" alt="React logo" />

          <p>

            <h2>3</h2>
          RESERVA:
          <br />
          Nome: Paula Tejjanno
          <br />
          Telefone: 6969-66696

            </p>
          </Link>

      </div>
        <div>
          <Link to="/" style={{
            color: 'black',

          }} onClick={() => alert("Mesa 4 Reservada")}>

        <img src={mesa} className="logo-mesa" alt="React logo" />

          <p>
            <h2>4</h2>
          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

            </p>
          </Link>

      </div>
      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />

          <p>
            <h2>5</h2>
          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>
     
      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>6</h2>

          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>
      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>7</h2>

          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>
      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>8</h2>

          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>

      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>9</h2>
          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>

      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>10</h2>
          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>
      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>11</h2>
          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>
      <div>

        <img src={mesa} className="logo-mesa" alt="React logo" />
          <p>
            <h2>12</h2>
          RESERVA:
          <br />
          Nome: Pedro Souza
          <br />
          Telefone: 6969-66696

        </p>
      </div>


      </div>
    </div>

  )
}

export default App
