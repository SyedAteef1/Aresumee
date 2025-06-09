
import { Navbar } from './Components/navbar'
import HomePage from './Components/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Resume from './Components/resume'
function App() {

    return (
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/resume' element={<Resume/>}></Route>
  </Routes>
      </BrowserRouter>
    )
  
}

export default App
