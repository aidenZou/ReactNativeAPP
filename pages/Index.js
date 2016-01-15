'use strict';

var React = require('react-native');
var cssVar = require('cssVar');

var PageMeiTuan = require('./MeiTuan');
var PageCtrip = require('./Ctrip');
var PageDropdown = require('./Dropdown');
var PageDropdownSimple = require('./DropdownSimple');
var TabBar = require('../components/TabBar');

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
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(goLoginRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Login
        </Text>
      </TouchableOpacity>
    );
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
  return data[0];
  // return {
  //   title: '#' + Math.ceil(Math.random() * 1000),
  // };
}

var data = [{
  id: 0,
  component: 'index',
  title: "首页",
  sceneConfig: null,
}, {
  component: 'dropdownSimple',
  title: "下拉刷新",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  component: 'dropdown',
  title: "下拉刷新",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  component: '2',
  title: "右侧进入",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  component: '3',
  title: "底部进入",
  sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
}, {
  component: 'meituan',
  title: "美团外卖",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  component: 'ctrip',
  title: "携程",
  sceneConfig: null,
}, {
  component: 'login',
  title: "登录",
  sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
}];

class NavMenu extends React.Component {
  render() {
    // <Text style={styles.messageText}>{this.props.message}</Text>
    return (
      <ScrollView style={styles.container}>
        {data.map((menu) => {
          // console.log(menu);
          return (
            <NavButton
              key={menu.component}
              onPress={() => {
                this.props.navigator.push({
                  id: menu.id,
                  component: menu.component,
                  title: menu.title,
                  message: 'Swipe right to dismiss',
                  sceneConfig: menu.sceneConfig,
                });
              }}
              text={menu.title}
            />
          )
        })}

        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="Pop"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          }}
          text="Pop to top"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'navbar' });
          }}
          text="Navbar Example"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'jumping' });
          }}
          text="Jumping Example"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'breadcrumbs' });
          }}
          text="Breadcrumbs Example"
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
  return data[0];
  // return {
  //   title: '#' + Math.ceil(Math.random() * 1000),
  // };
}

// initialRoute={{name: 'My First Scene', index: 0}}
// initialRoute={newRandomRoute()}
module.exports = React.createClass({
  render: function () {
    return (
      <Navigator
        sceneStyle={[styles.containerApp]}
        initialRoute={{title:'首页'}}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    )
  },
  // 渲染指定路由的场景
  _renderScene: function (route, navigator) {
    // console.log(route.component)
    // console.log(navigator)
    // <Text style={[{marginTop:100}]}>111</Text>
    // return (
    //   <ScrollView style={[styles.container]}>
    //     <Text>111</Text>
    //   </ScrollView>
    // )
    switch (route.component) {
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
      case 'dropdownSimple':
        return (
          <PageDropdownSimple navigator={navigator} />
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
});
