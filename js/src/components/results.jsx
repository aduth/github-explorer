import React from 'react';
import Result from './result';
import ResultPlaceholder from './result-placeholder';

const numberOfPlaceholders = 3;

class Results extends React.Component {
	renderPlaceholders() {
		return Array.apply( null, Array( numberOfPlaceholders ) ).map( ( value, i ) => {
			return <ResultPlaceholder key={ i } />;
		} );
	}

	renderResults() {
		return this.props.results.map( ( result ) => {
			return <Result key={ result.url } { ...result } />;
		} );
	}

	render() {
		return (
			<ul className="results">
				{ this.props.fetching ? this.renderPlaceholders() : this.renderResults() }
			</ul>
		);
	}
}

Results.propTypes = {
	fetching: React.PropTypes.bool,
	results: React.PropTypes.arrayOf( React.PropTypes.shape( {
		name: React.PropTypes.string,
		url: React.PropTypes.string,
		fragment: React.PropTypes.string,
		indices: React.PropTypes.array
	} ) )
};

Results.defaultProps = {
	fetching: false,
	results: Object.freeze( [] )
};

export default Results;
