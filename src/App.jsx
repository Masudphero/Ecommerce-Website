
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path={'/'} exact={true} element={<Home></Home>}>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
