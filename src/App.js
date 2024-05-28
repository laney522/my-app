import React from 'react';
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
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
      <Main />

      {/* <section>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae turpis a nunc bibendum faucibus. Mauris rhoncus nulla nec varius vehicula.</p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section> */}

      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;