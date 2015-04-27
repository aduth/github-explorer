import React from 'react';

export default function StoreObserver( Component, props ) {
	return class extends React.Component {
		componentDidMount() {
			props.forEach( ( prop ) => {
				this.props[ prop ].addListener( 'change', this.forceUpdate.bind( this ) );
			} );
		}

		componentWillUnmount() {
			props.forEach( ( prop ) => {
				this.props[ prop ].removeListener( 'change', this.forceUpdate.bind( this ) );
			} );
		}

		componentDidUpdate( prevProps ) {
			props.forEach( ( prop ) => {
				if ( prevProps[ prop ] === this.props[ prop ] ) {
					return;
				}

				if ( prevProps[ prop ] ) {
					prevProps[ prop ].removeListener( 'change', this.forceUpdate.bind( this ) );
				}

				if ( this.props[ prop ] ) {
					this.props[ prop ].on( 'change', this.forceUpdate.bind( this ) );
				}
			} );
		}

		render() {
			return <Component { ...this.props } />;
		}
	};
}
