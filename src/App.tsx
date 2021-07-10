import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SimpleCard from './components/exampleCard';
import Header from './components/external/Common/Header/Header';
import initFontAwesome from './store/utils/fontAwesome/fontAwesomeInit';

function App() {
  initFontAwesome()
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
