import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// 引入剛剛做好的 AuthProvider
import { AuthProvider } from './AuthContext.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* 先包 BrowserRouter，再包 AuthProvider，確保全 App 都能拿到 Context */}
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import '../css/index.css';
// import { BrowserRouter as Router } from 'react-router-dom';


// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <Router.StrictMode>
//     <App />
//   </Router.StrictMode>
// );





// import React from 'react';
// import ReactDOM from 'react-dom/client';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <h1>React 測試成功！</h1>
//   </React.StrictMode>
// );
