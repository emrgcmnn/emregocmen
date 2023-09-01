import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Varsa uygulamanızın ana bileşenini buraya import edin

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Ana bileşeni burada kullanın */}
  </React.StrictMode>,
  document.getElementById('root')
);
