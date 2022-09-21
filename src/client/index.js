import React from 'react';
import { createRoot } from "react-dom/client";
import App from './components/App'


 
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <div>
      <h1>Apollo's Library Splash Page</h1>
      <App />
    </div>
); 