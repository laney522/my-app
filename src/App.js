import React from 'react';
import './App.css';
import Main from './Main';

function App() {
  return (
    <>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <Main class="main-grid" />
      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;