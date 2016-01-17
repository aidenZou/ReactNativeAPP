/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

// var UIExplorerApp = require('./Examples/UIExplorer/UIExplorerApp.ios');
// var App = require('./components/Nav');
// var App = require('./Examples/UIExplorer/Navigator/NavigatorExample');

// var App = require('./components/TabBar');
// var App = require('./pages/MeiTuan');
// var App = require('./pages/Ctrip');
// var App = require('./pages/Dropdown');
var App = require('./pages/Index');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ReactNativeAPP = React.createClass({
  render: function() {
    return (
      // <Text>11111</Text>
      <App/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeAPP', () => ReactNativeAPP);
