import './App.css'
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import UserDetail from './pages/UserDatail';
import Users from './pages/Users';
import Layout from './components/Layout';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Redirigir la ruta raíz a /users */}
          <Route index element={<Navigate to="/users" replace />} />

          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:id" element={<UserDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
