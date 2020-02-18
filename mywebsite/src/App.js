import React from 'react';
// import ChangingWords from './ChangingWords';
import './App.css';
import MainPage from './components/pages/main-page';

function App() {
  return (
    <div className="App">
      {/* <ChangingWords
        words={['Designer', 'Developer', 'Engineer']}
        startingWord="Engineer"
        preText="I am a"
      /> */}
      <MainPage />
    </div>
  );
}

export default App;
