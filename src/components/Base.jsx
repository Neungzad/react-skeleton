var React = require('react');

var Base = React.createClass({   
    render() {
        return (
        	<div>
	            <h1>HEADER</h1>
	            {this.props.children}
	            <h1>FOOTER</h1>
            </div>
        );
    }
}); 

module.exports = Base;