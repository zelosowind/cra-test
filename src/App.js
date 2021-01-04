import React,  { useEffect  } from 'react';
import logo from './logo.svg';
// import data from './data.json';
import './App.css';

function App() {
  function onClick() {
    // console.log(data);
    // 동적으로 데이터를 가져오기
    import('./data.json').then(({default: data}) => {
      console.log({data});
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터를 보여주세요.</button>
        <p>hello!!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
