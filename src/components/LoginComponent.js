'use strict';

require('styles//Login.css');

const Actions = require('../actions');
const React = require('react');
const {
  Card,
  CardText,
  RaisedButton
} = require('material-ui');


class LoginComponent extends React.Component {
    onClick() {
        Actions.login();
    }
    
  render() {
    return (
      <Card style={{
          'maxWidth': '800px',
          'margin': '30px auto',
          'padding': '50px'
      }}>
        <CardText style={{
            'textAlign': 'center'
        }}>
        Please log in with your Google account.
        </CardText>

        <RaisedButton style={{
            display: 'block',
        }} onClick={this.onClick.bind(this)}
        label="Login securely with Google" primary={true} />

        </Card>
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
