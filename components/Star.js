var React = require('react-native');
var { Icon, } = require('react-native-icons');

var {
  StyleSheet,
  View,
  Text,
} = React;

// 星
var Star = React.createClass({
  render: function () {
    let num = this.props.num;
    let stars = [];
    while (num > 0) {
      if (num >= 1) {
        stars.push('FullStar');
      } else {
        stars.push('HalfStar');
      }
      num--;
    }
    return (
      <View style={[{flexDirection: 'row'}]}>
        {stars.map(function(type, index){
          if (type == 'HalfStar') {
            return <Icon
              key={index}
              name='fontawesome|star-half-o'
              size={10}
              color='#e09015'
              style={[{width: 10, height: 10}]} />
          }
          return <Icon
            key={index}
            name='fontawesome|star'
            size={10}
            color='#e09015'
            style={[{width: 10, height: 10}]} />
        })}
      </View>
    );
  }
});

module.exports = Star;
