import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Navbar';
import PrivateRoutes from './layouts/PrivateRoute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login></Login>}  />
          <Route path="signup" element={<Signup></Signup>}  />
          <Route path='/' element={<Navbar></Navbar>}>
            <Route element={<PrivateRoutes></PrivateRoutes>}>
              <Route index element={<Home></Home>}  />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </AuthProvider>
  );
}

export default App;
