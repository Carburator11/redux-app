
import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { addCounter } from './actions/'
import reducer from './reducer/'
import App from './components/app'

let store = createStore( reducer );

ReactDOM.render(
	<Provider store={store}>
        <App />
	</Provider>,
	document.getElementById('app')
);
// Router :  {/*<Router history={hashHistory}>{routes}</Router>*/}


// Test..
// ReactDOM.render(<h1>Hello worldzzz !!!</h1>, document.getElementById('app'))
