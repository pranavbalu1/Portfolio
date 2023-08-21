import React from 'react';

import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

