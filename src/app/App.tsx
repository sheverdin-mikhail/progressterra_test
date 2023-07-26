import React from 'react';
import './styles/index.scss'
import { MainPage } from 'pages/MainPage/MainPage';
import { Header } from 'widgets/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
