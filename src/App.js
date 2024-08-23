import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import { ThemeProvider } from './ThemeContext';

function App() {
  

  return (
    <ThemeProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </ThemeProvider>
  );
}

export default App;