import 'react'
import { Routes, Route } from "react-router-dom";
import Overview from './Overview';
import Packages from './Packages';
import People from './People';
import NotFoundPage from './NotFoundPage';
import '../styles/app.css'

const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path='/packages' element={<Packages />} />
      <Route path="/people" element={<People />} />
      {/*<Route path="/person/:id" element={<Person />} />*/}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
