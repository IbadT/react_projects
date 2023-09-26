import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './toolkitRedux';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)




// install redux-toolkit

// npm install @reduxjs/toolkit
// npm i react-redux


// create fold store and create store.js