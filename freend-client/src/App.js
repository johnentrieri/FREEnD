import React from 'react';
import './App.css';

import Layout from './Layout/Layout';
import FREEnD from './Containers/FREEnD/FREEnD';

function App() {
  return (
    <div className="App">
      <Layout>
        <FREEnD />
      </Layout>
    </div>
  );
}

export default App;
