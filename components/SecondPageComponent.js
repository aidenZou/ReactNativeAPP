'use strict';
var React = require('react-native');

var {
    View,
    Text,
    TouchableOpacity,
} = React;

var FirstPageComponent = require('./FirstPageComponent');

var SecondPageComponent = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
    },
    _pressButton: function() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:irstPageComponent了
            navigator.pop();
        }
    },

    render: function() {
      return (
        <View style={[{padding: 100}]}>
            <TouchableOpacity onPress={this._pressButton}>
                <Text>点我跳回去</Text>
            </TouchableOpacity>
        </View>
      );
    }
});

module.exports = SecondPageComponent;
