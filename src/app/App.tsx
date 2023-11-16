import React from 'react';

import "./styles/index.scss"
import MainPage from 'pages/MainPage';

import data from "./data.json"

function App() {
  return (
    <div className="app">
      <MainPage Featured={data.Featured} TrendingNow={data.TrendingNow}/>
    </div>
  );
}

export default App;
