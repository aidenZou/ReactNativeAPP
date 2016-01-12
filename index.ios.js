/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var App = require('./pages/TabBar');
// var UIExplorerApp = require('./Examples/UIExplorer/UIExplorerApp.ios');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ReactNativeAPP = React.createClass({
  render: function() {
    return (
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
