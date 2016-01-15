var React = require('react-native');

// 美团布局

var {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f0efed',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  list: {
    height: 160,
    marginTop: 10,
    padding: 6,
    backgroundColor: '#fff',
    borderColor: '#DDD8CE',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  borderL: {
    borderLeftColor: '#ddd8ce',
    borderLeftWidth: 0.5,
  },
  borderR: {
    borderRightColor: '#ddd8ce',
    borderRightWidth: 0.5,
  },
  borderB: {
    borderBottomColor: '#ddd8ce',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 14,
    fontWeight:'bold',
    // fontWeight: '900',
    marginTop: 15,
    marginBottom: 12,
  },
  title2: {
    marginTop: 6,
    marginBottom: 7,
  },
  info: {
    fontSize: 12,
    color: '#666',
  },
  imgbox1: {
    height: 88,
    width: 88,
  },
  huilifeImgbox: {
    height: 65,
    width: 85,
  },
  scenseImgbox: {
    height: 38,
    width: 38,
  },
  timeText: {
    // width: 40,
    fontSize:12,
    // padding: 20,
    borderRadius: 5,
    fontWeight: '900',
    backgroundColor: '#4C4C4C',
    color: '#fff',
  },
});

var Row = React.createClass({
  render: function() {
    return (
      <View style={[styles.list, styles.row]}>
        <View style={[{flex: 1}]}>
          <View style={[styles.borderR]}>
            <View style={[{flex: 1, alignItems: 'center'}]}>
              <View>
                <Text style={[styles.title, {color: '#55a40f'}]}>我们约吧</Text>
                <Text style={[styles.info]}>恋人家人好朋友</Text>
              </View>
              <Image style={[styles.imgbox1]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
            </View>
          </View>
        </View>
        <View style={[{flex: 2}]}>
          <View style={[styles.row, styles.borderB]}>
            <View style={[{flex: 1, paddingLeft: 30}]}>
              <Text style={[styles.title, styles.red]}>超低价值</Text>
              <Text style={[styles.info]}>十元惠生活</Text>
            </View>
            <View style={[{flex: 1}]}>
              <Image style={[styles.huilifeImgbox]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={[{flex: 1, alignItems: 'center'}, styles.borderR]}>
              <View>
                <Text style={[styles.title, styles.title2, {color:'#f742a0'}]}>工作简餐</Text>
                <Text style={[styles.info]}>实惠方便选择多</Text>
              </View>
              <Image style={[styles.scenseImgbox, { alignSelf: 'center'}]} source={{uri: 'http://p1.meituan.net/mmc/726b30f162d1ea39a5077af83cec620811475.png'}}></Image>
            </View>
            <View style={[{flex: 1, borderLeftColor: '#ddd8ce', borderLeftWidth: 0.5}]}>
              <View style={[{paddingLeft: 18}]}>
                <Text style={[styles.title, styles.title2, {color:'#ff8601'}]}>名店抢购</Text>
                <Text style={[styles.info, {marginTop: 3, marginBottom: 10}]}>距离结束</Text>
                <Text>
                  <Text style={[styles.timeText]}>07</Text>:
                  <Text style={[styles.timeText]}>08</Text>:
                  <Text style={[styles.timeText]}>05</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Row/>
        </View>
      </ScrollView>
    );
  }
});
