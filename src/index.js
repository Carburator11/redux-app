
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducer/'
import App from './components/app'
const store = createStore( reducers );

ReactDOM.render(
	<Provider store={store}>
        <App />
	</Provider>,
	document.getElementById('app')
);
