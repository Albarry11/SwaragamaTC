import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import { initPerformanceOptimizations, loadCriticalResources } from './utils/resourceHints'

// Initialize performance optimizations
initPerformanceOptimizations();
loadCriticalResources();

// Use concurrent features for better performance
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)