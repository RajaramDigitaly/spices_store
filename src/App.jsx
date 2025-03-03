
import './App.css'
import CustomForm from './component/shared/Form/main'
import About from './pages/About/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>}></Route>
    </Routes>
    <CustomForm/>
    </BrowserRouter>
  )
}

export default App
