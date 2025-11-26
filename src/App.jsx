import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Landingpage from './Components/Landingpage'
import Men from './Components/Men'
import Women from './Components/Women'
import Child from './Components/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/Child" element={<Child/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
