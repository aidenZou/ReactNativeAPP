'use strict';
var React = require('react-native');

var {
    View,
    Navigator
} = React;
var FirstPageComponent = require('./FirstPageComponent');

var SampleComponent = React.createClass({
    render: function() {
        var defaultName = 'FirstPageComponent';
        var defaultComponent = FirstPageComponent;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            // return Navigator.SceneConfigs.VerticalDownSwipeJump;
            return Navigator.SceneConfigs.FloatFromRight
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component) {
              return <Component {...route.params} navigator={navigator} />
            }
          }} />
        );

    }
});

module.exports = SampleComponent;
