'use strict';

var React = require('react-native');
var cssVar = require('cssVar');

// var Icon = require('react-native-vector-icons/FontAwesome');
var { Icon, } = require('react-native-icons');

var PageMeiTuan = require('./MeiTuan');
var PageCtrip = require('./Ctrip');
var PageDropdown = require('./Dropdown');
var PageDropdownSimple = require('./DropdownSimple');
var TabBar = require('../components/TabBar');
var PageIcon = require('./Icon');
var PageDoubanIndex = require('./DoubanIndex');

var {
  StyleSheet,
  Navigator,
  PixelRatio,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} = React;

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    // <Icon name="angle-left" size={30} color="#900" />
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Icon
          name='fontawesome|angle-left'
          size={40}
          color='#fff'
          style={[{width: 15, height: 40}]}/>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    if (index !== 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.push(goLoginRandomRoute())}
        style={styles.navBarRightButton}>
        <Icon
          name='fontawesome|ellipsis-v'
          size={20}
          color='#fff'
          style={[{width: 15, height: 40}]}/>
      </TouchableOpacity>
    );
    // <Text style={[styles.navBarText, styles.navBarButtonText]}>
    //   Login
    // </Text>
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },
}

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

function goLoginRandomRoute() {
  return ROUTE_STACK[0];
  // return {
  //   title: '#' + Math.ceil(Math.random() * 1000),
  // };
}

var ROUTE_STACK = [{
  sence: 'icon',
  title: "Icon",
  sceneConfig: null,
}, {
  sence: 'dropdownSimple',
  title: "下拉刷新简单示例",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  sence: 'dropdown',
  title: "下拉刷新",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  sence: '2',
  title: "右侧进入",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  sence: '3',
  title: "底部进入",
  sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
}, {
  sence: 'meituan',
  title: "美团外卖",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  sence: 'ctrip',
  title: "携程",
  sceneConfig: null,
}, {
  sence: 'douban',
  title: "豆瓣:影院热映",
  sceneConfig: null,
}, {
  sence: 'login',
  title: "登录",
  sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
}, {
  sence: 'index',
  title: "首页",
  sceneConfig: null,
}];

class NavMenu extends React.Component {
  render() {
    // <Text style={styles.messageText}>{this.props.message}</Text>
    return (
      <ScrollView style={styles.container}>
        {ROUTE_STACK.map((menu) => {
          // console.log(menu);
          return (
            <NavButton
              key={menu.sence}
              onPress={() => {
                this.props.navigator.push(menu);
              }}
              text={menu.title}
            />
          )
        })}
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          }}
          text="Pop to top"
        />
        <NavButton
          onPress={() => {
            this.props.onExampleExit();
          }}
          text="Exit <Navigator> Example"
        />
      </ScrollView>
    );
  }
}

function newRandomRoute() {
  return ROUTE_STACK[0];
  // return {
  //   title: '#' + Math.ceil(Math.random() * 1000),
  // };
}

// initialRoute={{name: 'My First Scene', index: 0}}
// initialRoute={newRandomRoute()}
module.exports = React.createClass({
  getInitialState: function () {
    return {
      hideNavBar: false,
    };
  },
  render: function () {
    // initialRouteStack={ROUTE_STACK}
    // initialRoute={ROUTE_STACK[0]}
    return (
      <Navigator
        sceneStyle={[styles.containerApp]}
        initialRoute={ROUTE_STACK[7]}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
        navigationBar={
          this._navBar()
        }
      />
    )
  },
  _navBar: function () {
    if (!this.state.hideNavBar) {
      return (
        <Navigator.NavigationBar
          routeMapper={NavigationBarRouteMapper}
          style={styles.navBar}
        />
      )
    } else {
      return null;
    }
  },
  // 渲染指定路由的场景
  _renderScene: function (route, navigator) {
    console.log(route.sence)
    // console.log(navigator)
    // <Text style={[{marginTop:100}]}>111</Text>
    // return (
    //   <ScrollView style={[styles.container]}>
    //     <Text>111</Text>
    //   </ScrollView>
    // )
    switch (route.sence) {
      case 'icon':
        return (
          <PageIcon/>
        )
        break;
      case 'meituan':
        return (
          <PageMeiTuan navigator={navigator} />
        )
        break;
      case 'ctrip':
        return (
          <PageCtrip navigator={navigator} />
        )
        break;
      case 'douban':
      return (
        <PageDoubanIndex route={route} navigator={navigator} />
      )
      case 'dropdownSimple':
        return (
          <TabBar/>
          // <PageDropdownSimple navigator={navigator} />
        )
        break;
      case 'dropdown':
          return (
            <PageDropdown navigator={navigator} />
          )
          break;
      default:
        return (
          // <TabBar />
          <NavMenu
            message={route.message}
            navigator={navigator}
            onExampleExit={this.props.onExampleExit}
          />
        )
    }
  },
  // 配置场景动画和手势
  _configureScene: function (route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    // FloatFromRight FloatFromBottom
    return Navigator.SceneConfigs.FloatFromRight;
  }
});

var styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    marginTop: 64,
    // paddingTop: 64,
    // backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    // backgroundColor: 'red'
  },
  navBar: {
    // height: 50,
    backgroundColor: 'green',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarButtonText: {
    // color: cssVar('fbui-accent-blue'),
    color: '#fff',
  },
  navBarTitleText: {
    // color: cssVar('fbui-bluegray-60'),
    color: '#fff',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    marginLeft: 10,
  },
  navBarRightButton: {
    marginRight: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },

  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
});
