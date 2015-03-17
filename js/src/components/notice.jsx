import React from 'react';

class Notice extends React.Component {
	renderIcon() {
		if ( this.props.icon ) {
			return <span className={ 'notice__icon fa fa-' + this.props.icon } />;
		}
	}

	renderChildren() {
		if ( 'string' === typeof this.props.children ) {
			return <p className="notice__content">{ this.props.children }</p>;
		} else if ( this.props.children ) {
			return this.props.children;
		}
	}

	render() {
		let classes = 'notice';
		if ( this.props.className ) {
			classes += ' ' + this.props.className;
		}

		return (
			<div className={ classes }>
				{ this.renderIcon() }
				{ this.renderChildren() }
			</div>
		);
	}
}

Notice.propTypes = {
	icon: React.PropTypes.string
};

export default Notice;
