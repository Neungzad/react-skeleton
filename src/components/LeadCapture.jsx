var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
    displayName: 'LeadCapture',
    onSubmit() {
		if (!this.refs.emailField.state.valid) {
			alert("Email not valid");
		} else {
			alert("Good");

			var httpRequstBody = {
				email: this.refs.emailField.state.value,
				firstName: this.refs.fnameField.state.value,
				lastName: this.refs.lnameField.state.value,
			}

			console.log(httpRequstBody);
			
			this.refs.emailField.clear();
			this.refs.fnameField.clear();
			this.refs.lnameField.clear();
		}	
    },
    render() {
        return (
            <div className="col-sm-3">
            	<div className="panel panel-default">
            		<div className="panel-body">
						<NameField type="First" ref="fnameField" /><br/>
						<NameField type="Last" ref="lnameField" /><br/>
						<EmailField ref="emailField" />
						<buttton onClick={this.onSubmit} className="btn btn-primary" >Submit</buttton>
            		</div>
            	</div>
            </div>
        );
    }
});

module.exports = LeadCapture;