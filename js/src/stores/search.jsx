import EventEmitter from 'events';
import xhr from 'superagent';
import qs from 'querystring';
import { debounce } from 'lodash';

const baseUrl = 'https://api.github.com/search/code?';
const minimumTermLength = 3;
const debounceTimeout = 1000;

export default class SearchStore extends EventEmitter {
	constructor( options ) {
		super();

		this.options = options;
		this.queries = {};
		this.fetch = debounce( this.fetch, debounceTimeout );
	}

	get( term ) {
		if ( ! term || term.length < minimumTermLength ) {
			return;
		}

		if ( term in this.queries ) {
			return this.queries[ term ];
		}

		this.fetching = true;
		this.fetch( term );
	}

	fetch( term ) {
		let queryParts, url, request;

		queryParts = [ term, 'repo:' + this.options.repository ];
		if ( this.options.path ) {
			queryParts.push( 'path:' + this.options.path );
		}

		url = baseUrl + qs.stringify( { q: queryParts.join( ' ' ) } );

		request = xhr.get( url ).set( 'Accept', 'application/vnd.github.v3.text-match+json' );
		if ( this.options.token ) {
			request = request.set( 'Authorization', 'token ' + this.options.token );
		}

		request.end( ( err, response ) => {
			this.fetching = false;

			if ( ! err && response.ok ) {
				this.queries[ term ] = this.parse( response.body );
				this.emit( 'change' );
			}
		} );
	}

	isFetching() {
		return this.fetching;
	}

	parse( body ) {
		if ( ! Array.isArray( body.items ) ) {
			return [];
		}

		return body.items.map( ( item ) => {
			let match = item.text_matches[0],
				indices;

			indices = match.matches.map( ( match ) => {
				return match.indices;
			} );

			return {
				name: item.name,
				url: item.html_url,
				fragment: match.fragment,
				indices: indices
			};
		} );
	}
}
