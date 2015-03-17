import React from 'react';
import Search from './search';
import Results from './results';
import Notice from './notice';
import StoreObserver from '../decorators/store-observer';

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			query: null
		};
	}

	onSearch( event ) {
		this.setState( {
			query: event.target.value
		} );
	}

	renderContent() {
		let access = this.props.access.get(),
			results;

		if ( undefined === access ) {
			return <Notice icon="signal" className="is-flashing">Connecting…</Notice>;
		} else if ( ! access ) {
			return <Notice icon="lock">This repository is private.</Notice>;
		} else if ( ! this.state.query ) {
			return <Notice icon="search">Enter a search term above.</Notice>;
		}

		results = this.props.search.get( this.state.query );

		if ( results && ! results.length ) {
			return <Notice icon="frown-o">No results were found.</Notice>;
		} else {
			return <Results fetching={ this.props.search.isFetching() } results={ results } />;
		}
	}

	render() {
		return (
			<div className="app">
				<Search query={ this.state.query } onSearch={ this.onSearch.bind( this ) } />
				{ this.renderContent() }
			</div>
		);
	}
}

App.propTypes = {
	search: React.PropTypes.object,
	access: React.PropTypes.object
};

export default StoreObserver( App, [ 'search', 'access' ] );
