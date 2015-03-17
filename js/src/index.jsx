import React from 'react';
import App from './components/app';
import SearchStore from './stores/search';
import AccessStore from './stores/access';
import qs from 'querystring';

let query = qs.parse( window.location.search.substr( 1 ) ),
	options = {
		repository: query.repository,
		path: query.path,
		token: process.env.GITHUB_ACCESS_TOKEN
	};

React.render(
	<App search={ new SearchStore( options ) } access={ new AccessStore( options ) } />,
	document.body
);
