import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Product provider
import ProductProvider from './contexts/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
)
