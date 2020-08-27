import React from 'react';
import './App.css';
import '../src/course'
import Main from './Components/Main/Main';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Better Tomorrow</h1>
        <p>Embark on a voyage of learning!</p>
      </header>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Our Courses</h2>
      <br/>
      <Main></Main>
    </div>
  );
}

export default App;
