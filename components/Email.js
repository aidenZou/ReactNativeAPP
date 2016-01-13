var React = require('react-native');

// 邮件的末尾署名的组件

var {
  StyleSheet,
  View,
  Text
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  text: {
    color: 'red'
  }
});

// <Email name="AidenZou/子凡" url="React-Native"/>
module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <Text style={styles.text}>{this.props.url}</Text>
      </View>
    );
  }
});
