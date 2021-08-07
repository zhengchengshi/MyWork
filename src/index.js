//移入react核核心库
import React from 'react'
//引入reactdom
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.jsx'

import {BrowserRouter} from 'react-router-dom'
//渲染app组件到页面
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.querySelector('#root'))