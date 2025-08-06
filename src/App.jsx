import './App.css'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  )
}

export default App
