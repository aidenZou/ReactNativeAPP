'use strict';

var React = require('react-native');

var {
  StyleSheet,
  NavigatorIOS,
  ScrollView,
  TouchableHighlight,
  ListView,
  View,
  Text,
  Alert,
} = React;

var alertMessage = '是滴哦！';

var Page = React.createClass({
  render: function() {
    return (
      <ScrollView style={[{flex: 1}]}>
        <TouchableHighlight onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
          )}>
          <View style={[styles.container]}>
            <Text style={[{padding: 20}]}>鲍鲍是个大坏蛋</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
});

// <NavigatorIOS
//   style={[{flex: 1}]}
//   initialRoute={{
//     component: PageIndex,
//     title: '首页',
//   }}
// />

// <NavigatorIOS
//   style={styles.container}
//   initialRoute={{
//     component: EmptyPage,
//     title: '<NavigatorIOS>',
//     rightButtonTitle: 'Done',
//     onRightButtonPress: () => {
//       StatusBarIOS.setStyle('default');
//       this.props.onExampleExit();
//     },
//     passProps: {
//       text: 'The nav bar has custom colors with tintColor, ' +
//         'barTintColor and titleTextColor props.',
//     },
//   }}
//   tintColor="#FFFFFF"
//   barTintColor="#183E63"
//   titleTextColor="#FFFFFF"
//   translucent={true}
// />

module.exports = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={[{flex: 1}]}
        initialRoute={{
          component: Page,
          title: '首页',
          rightButtonTitle: 'Done',
          onRightButtonPress: () => {
            // StatusBarIOS.setStyle('default');
            // this.props.onExampleExit();
            Alert.alert(
              'Alert Title',
              '我还没写哦',
            );
          },
        }}
        tintColor="#FFFFFF"
        barTintColor="#183E63"
        titleTextColor="#FFFFFF"
      />
    );
  }
});

var styles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  },
};
