
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPageIndex from './pages/landing'; // Adjust the path as necessary
import NotFoundIndex from './pages/notfound';
import Navbar from './components/Navbar';
import SignUpIndex from './pages/signup';
import LogIn from './pages/login';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<LandingPageIndex />} />
        <Route path="*" element={<NotFoundIndex />} /> 
        <Route path="/signup" element={<SignUpIndex/>} />
        <Route path="/login" element={<LogIn/>} /> 
        
      </Routes>
      </main>
    </Router>
  );
}

export default App;
