// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './css/style.css';
import './css/newspaper.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Create a react component
const Home = () => {
    return <Header />
}

// Take the react component and show it on the screen
ReactDOM.render(
    <Home/>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

























