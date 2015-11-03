require('normalize.css');
require('styles/App.css');
//example: https://github.com/callemall/material-ui/blob/master/docs/src/app/components/code-example/code-example.jsx
const {
  ClearFix,
  Paper,
  Card,
  Styles,
} = require('material-ui');

const {
  Spacing,
  Typography,
} = Styles;

const AppBar = require('material-ui/lib/app-bar');
const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const Login = require('./LoginComponent');
const CategoryList = require('./CategoryListComponent');

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');


const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  render() {

    var view = <Login />;

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
    };

    let standardActions = [
      { text: 'Okay' },
    ];

    return (
      <div>
        <AppBar title="Awesome Todo App" />
        <Login />
        <div style={containerStyle}>
            <Dialog
              title="Super Secret Password"
              actions={standardActions}
              ref="superSecretPasswordDialog">
              1-2-3-4-5
            </Dialog>

            <h1>material-ui</h1>
            <h2>example project</h2>

            <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
            <Card style={{
              maxWidth: 1200,
              margin: '30px auto',
              padding: 30
            }}>
              Hello card!
            </Card>
            <CategoryList />
        </div>
      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  },

});

export default Main;
