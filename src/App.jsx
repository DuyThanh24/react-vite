
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
