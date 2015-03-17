import React from 'react';

class Search extends React.Component {
	render() {
		return (
			<form className="search">
				<input type="text" value={ this.props.query } placeholder="Search" className="search__input" onChange={ this.props.onSearch } />
				<span className="search__icon fa fa-search"></span>
			</form>
		);
	}
}

Search.propTypes = {
	query: React.PropTypes.string,
	onSearch: React.PropTypes.func
};

Search.defaultProps = {
	onSearch: function() {}
};

export default Search;
