import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer'
import { createStore } from 'redux';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
      <React.StrictMode>
        <App />
      </React.StrictMode>
    
  </Provider>
  
);
