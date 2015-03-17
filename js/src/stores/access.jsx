import EventEmitter from 'events';
import xhr from 'superagent';

const baseUrl = 'https://api.github.com/repos/';

export default class AccessStore extends EventEmitter {
	constructor( options ) {
		super();

		this.options = options;
	}

	get() {
		if ( 'hasAccess' in this ) {
			return this.hasAccess;
		}

		this.fetch();
	}

	fetch() {
		let url = baseUrl + this.options.repository,
			request;

		if ( this.fetching ) {
			return;
		}

		request = xhr.get( url );
		if ( this.options.token ) {
			request = request.set( 'Authorization', 'token ' + this.options.token );
		}

		this.fetching = true;
		request.end( ( err, response ) => {
			this.fetching = false;
			this.hasAccess = ! err && response.ok;
			this.emit( 'change' );
		} );
	}

	isFetching() {
		return this.fetching;
	}
}
