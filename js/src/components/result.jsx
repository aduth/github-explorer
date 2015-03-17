import React from 'react';

class Result extends React.Component {
	renderFragment() {
		return this.props.indices.reduce( ( memo, offset ) => {
			let lastItem;

			if ( ! memo.length ) {
				memo = [ <span key={ [ 0, offset[0] ].join() }>{ this.props.fragment.substring( 0, offset[0] ) }</span> ];
			} else {
				lastItem = memo.pop();
				memo.push(
					<span key={ [ lastItem.key, offset[0] ].join() }>{ this.props.fragment.substring( lastItem.key, offset[0] ) }</span>
				);
			}

			memo.push(
				<mark key={ [ offset[0], offset[1] ].join() }>{ this.props.fragment.substring( offset[0], offset[1] ) }</mark>,
				<span key={ offset[1] }>{ this.props.fragment.substring( offset[1] ) }</span>
			);

			return memo;
		}, [] );
	}

	render() {
		return (
			<li className="result">
				<a href={ this.props.url } target="_blank" className="result__link">
					<h2 className="result__name">{ this.props.name }</h2>
					<pre className="result__fragment">{ this.renderFragment() }</pre>
				</a>
			</li>
		);
	}
}

Result.propTypes = {
	name: React.PropTypes.string,
	url: React.PropTypes.string,
	fragment: React.PropTypes.string,
	indices: React.PropTypes.array
};

export default Result;
