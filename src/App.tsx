import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import UserDetail from './pages/UserDatail';
import Users from './pages/Users';



function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <main>
          <Nav/>
          
            <Routes>
              <Route path="/" element={<Users/>}/>
              <Route path="/:id" element={<UserDetail/>}/>
            </Routes>
                
          
        </main>
      </BrowserRouter>
      
    </>
  )
}

export default App
