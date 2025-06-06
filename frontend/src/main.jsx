import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';     
import { PersistGate } from 'redux-persist/integration/react';
import {store, persister} from './redux/store';          

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>                
    <PersistGate loading={null} persistor={persister}>
      <App/>
    </PersistGate>
  </Provider>
)
