var React = require('react');
var validator = require("email-validator");

var EmailField = React.createClass({
	getInitialState() {
	    return {
	    	valid: true,
	    	value: "" 
	    };
	},    
	handleChange(e) {
		if (!validator.validate(e.target.value)) {
			this.setState({valid: false, value: e.target.value});
		} else {
			this.setState({valid: true, value: e.target.value});
		}		
	},
    render() {
    	var classValidate = this.state.valid ? "form-group" : "form-group has-error";
        return (
        	<div className={classValidate} >
        		<input type="text" className="form-control" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
        	</div>
        );
    } 
}); 

module.exports = EmailField;