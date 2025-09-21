import './styles/App.scss'
import NavBar from './Components/NavBar'
import Sections from './Components/Sections'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Sections />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
