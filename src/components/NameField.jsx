var React = require('react');

var NameField = React.createClass({
    displayName: 'NameField',
    getInitialState() {
        return {
        	value: ""        
        };
    },
	onChange(e) {
		this.setState({value: e.target.value});
	},
	clear() {
		this.setState({value: ""});
	},
    render() {
        return (
            <input onChange={this.onChange} className="form-control" type="text" placeholder={this.props.type+" Name"} value={this.state.value} />
        );
    }
});

module.exports = NameField;