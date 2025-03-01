

import './App.css'
import CustomFooter from './component/shared/footer/main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Blog from './pages/blog/main'

function App() {
  

  return (
    <>
      <Blog/>
      <CustomFooter/>
        
    </>
  )
}

export default App
