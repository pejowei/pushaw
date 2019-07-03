import React from 'react';
import './App.css';

import { Col, Row } from 'antd'

import Counter from './Counter'
import Listener from './Listener'

const App: React.FC = () => {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <h1>Pushaw: A boilerplate for React + Redux + Pusher + Typescript</h1>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col span={6}><Counter/></Col>
      </Row>
      <hr/>
      <Row>
        <Col span={12}><Listener/></Col>
      </Row>
    </div>
  );
}

export default App;
