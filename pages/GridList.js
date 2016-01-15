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

var PageOld = React.createClass({
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

var Page = React.createClass({
  getInitialState: function(){
    var data = [{
      title: "React-Native入门指南",
      author: "vczero",
      time: "2015-06-28"
    }, {
      title: "为什么世界不一样",
      author: "vczero",
      time: "2015-06-8"
    }, {
      title: "你来，我就告诉你",
      author: "vczero",
      time: "2015-04-01"
    }];
    return {
      articles: data
    };
  },
  render: function () {
    return (
      <ScrollView>
        <View style={[styles.listContainer]}>
          {this.state.articles.map(function(article){
            return <Article article={article}/>
          })}
        </View>
      </ScrollView>
    )
  }
});

var Article = React.createClass({
  // article = {
  //   title: "React-Native入门指南",
  //   author: "vczero",
  //   time: "2015-06-28"
  // }
  render: function () {
    return(
      <View style={[styles.item]}>
        <Text>{this.props.article.title}</Text>
        <Text>{this.props.article.author}</Text>
        <Text>{this.props.article.time}</Text>
      </View>
    );
  }
});

var LV = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      // dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2']),
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },
  render: function () {
    return (
      <ListView
        style={[{backgroundColor: '#f0efed'}]}
        contentContainerStyle={[styles.listContainer]}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    )
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    return ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', '123'];

    // var dataBlob = [];
    // for (var ii = 0; ii < 100; ii++) {
    //   var pressedText = pressData[ii] ? ' (X)' : '';
    //   dataBlob.push('Cell ' + ii + pressedText);
    // }
    // return dataBlob;
  },
  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    // var rowHash = Math.abs(hashCode(rowData));
    // var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight underlayColor="transparent">
        <View>
          <View style={styles.row}>
            <Text>{rowData}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

});

module.exports = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={[{flex: 1, marginTop: 0}]}
        initialRoute={{
          component: LV,
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
  listContainer: {
    // flex: 1,
    // justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#f0efed',
    // backgroundColor: 'green',
    // paddingTop: 10,
    // paddingBottom: 18.75,
    // paddingBottom: 12.5,
    justifyContent: 'space-around',
  },
  row: {
    justifyContent: 'center',
    // padding: 5,
    // margin: 10,

    // marginTop: 18.75,
    // marginLeft: 18.75,

    marginBottom: 25,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  item: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#DDD8CE',
    borderBottomWidth: 0.5,
  },
};
