import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';

const root = document.getElementById('root');

const render = Component => {
    ReactDOM.render(
    <AppContainer>
        <Component/>
    </AppContainer>,root);
}

render(App);

if(module.hot){
    module.hot.accept('./App.jsx',()=>{
        const NextApp = require('./App.jsx').default;
        render(NextApp);
    });
}