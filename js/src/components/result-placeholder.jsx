import React from 'react';

export default class ResultPlaceholder extends React.Component {
	render() {
		return (
			<li className="result is-placeholder">
				<span className="result__link">
					<h2 className="result__name" />
					<pre className="result__fragment" />
				</span>
			</li>
		);
	}
}
