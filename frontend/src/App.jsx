import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/fellows/:id" element={<CustomerDetails />}></Route>
    </Routes>
  )
}

export default App