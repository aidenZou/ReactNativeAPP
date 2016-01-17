var React = require('react-native');
// var Icon = require('react-native-vector-icons/FontAwesome');
var { Icon, } = require('react-native-icons');

var {
  StyleSheet,
  ScrollView,
} = React;

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#F2F2F2',
    flex:1,
  },
});

module.exports = React.createClass({
  render: function() {
    return (
      <ScrollView style={[styles.container]}>
        <Icon
          name='fontawesome|apple'
          size={150}
          color='#55acee'
          style={[{width: 150, height: 150}]} />
        <Icon
          name='fontawesome|square'
          size={80}
          color='#55acee'
          style={[{flexDirection: 'column', width: 70, height: 70, alignItems: 'center'}]}>
          <Icon
            name='fontawesome|twitter'
            size={50}
            color='red'
            style={[{flex: 1, width: 40, height: 40}]} />
        </Icon>
      </ScrollView>
    );
  }
});
