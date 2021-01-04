import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister(); PWA라는 기능을 사용하려고 할 때 쓰는 것 (프로그레시브 웹 앱)
// 이미지 파일도 임포트를 해서 사용하는 것이 좋다. 이렇게 사용하면 이미지 경로에 해시 값이 들어가기 때문에 브라우저 캐싱을 효율적으로 활용할 수 있다.
// json 파일도 임포트 가능하다.
// 자바스크립트에서 임프트해서 사용할때 한가지 좋은 점은 예를들어 데이터 사이즈가 크다고 할때 그리고 이 데이터가 항상 필요한게 아니라 특정 순간에 만 필요할때 그때 받아 오는 것이 좋다.
//