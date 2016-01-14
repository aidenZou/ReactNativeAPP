'use strict';

var React = require('react-native');
var cssVar = require('cssVar');

var PageMeiTuan = require('./MeiTuan');
var PageCtrip = require('./Ctrip');

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
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
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

var data = [{
  id: 1,
  component: 'meituan',
  title: "美团外卖",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  id: 2,
  component: '2',
  title: "右侧进入",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  id: 3,
  component: '3',
  title: "底部进入",
  sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
}, {
  id: 4,
  component: 'meituan',
  title: "美团外卖",
  sceneConfig: Navigator.SceneConfigs.FloatFromRight,
}, {
  id: 5,
  component: 'ctrip',
  title: "携程",
  sceneConfig: null,
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
              key={menu.id}
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
  return {
    title: '#' + Math.ceil(Math.random() * 1000),
  };
}

// initialRoute={{name: 'My First Scene', index: 0}}
// initialRoute={newRandomRoute()}
module.exports = React.createClass({
  render: function () {
    return (
      <Navigator
        style={[styles.container]}
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
    console.log(route.component)
    // console.log(navigator)
    // return (
    //   <Text style={[{marginTop:100}]}>111</Text>
    // )
    switch (route.component) {
      case 'meituan':
        return (
          <ScrollView style={[styles.container]}>
            <PageMeiTuan navigator={navigator} />
          </ScrollView>
        )
        break;
      case 'ctrip':
        return (
          <ScrollView style={[styles.container]}>
            <PageCtrip navigator={navigator} />
          </ScrollView>
        )
        break;
      default:
        return (
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
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: 50,
    backgroundColor: '#EAEAEA',
    backgroundColor: 'red',
  },
  navBar: {
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
  container: {
    flex: 1,
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
