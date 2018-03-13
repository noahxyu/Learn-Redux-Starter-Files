import React from 'react';
import { render } from 'react-dom';


import css from './styles/style.styl';


//import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" components={Main}>
				<IndexRoute components={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" components={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
// 這裡的router 是相對應上面定義出來的 router