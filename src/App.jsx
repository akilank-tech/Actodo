import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import Signup from  './pages/signin'
import Landing from './pages/landing'
import { BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  const[users,setusers]=useState(
        [
            {
                username:"Akil",
                password:"123"
            }
        ]
    )

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path='/signin' element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
