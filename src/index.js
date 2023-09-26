import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Head from './Head';
import 'antd/dist/antd.min.css';
import { Col, Row } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Row style={{textAlign: 'center', backgroundColor: 'rgb(62, 255, 159)', height: '100vh'}}>
      <Col span={10} offset={7}>
        <div className='container'>
          <Head />
          <App />
        </div>
      </Col>
    </Row>
  </Provider>
);
