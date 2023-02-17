import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux';
// bản chất redux cũng sử dụng context API của react
// store ni được dùng chung ở tất cả component 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));