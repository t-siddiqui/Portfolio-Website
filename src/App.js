// src/App.js

import { BrowserRouter } from 'react-router-dom';
import MainApp from './components/MainApp'; // Your main application content

function App() {
  // The state and conditional logic for the landing page have been removed.
  // The app now directly renders the main content.
  return (
    <BrowserRouter basename="/Portfolio-Website">
      <MainApp />
    </BrowserRouter>
  );
}

export default App;