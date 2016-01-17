var React = require('react-native');
var Swiper = require('react-native-swiper')

// 星
var Star = require('../components/Star')

var {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  ScrollView,
  ListView,
  ActivityIndicatorIOS,
  PixelRatio
} = React;

// 正在热映
var Api = 'https://api.douban.com/v2/movie/in_theaters';

// fetch(Api, {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })

// fetch('https://api.douban.com/v2/movie/in_theaters')
//   .then((response) => response.json())
//   .then((data) => {console.log(data.title);})
//   .catch((error) => {console.warn(error);});

// 评分
var Rating = React.createClass({
  render: function () {
    return (
      <View style={[{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5}]}>
        <Text style={[styles.movieText]}>评分：</Text>
        <Star num={this.props.rating.average/2} />
        <Text style={[styles.movieText, {marginLeft: 5}]}>{this.props.rating.average}</Text>
      </View>
    );
  }
});

module.exports = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      title: '',
      datas: ds.cloneWithRows([]),
    };
  },
  componentDidMount: function() {
    this._loadinitData();
    // if(!this.state.datas) {
    //   this._loadinitData();
    // }
  },
  // 异步加载数据
  async _loadinitData() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    try {
      let response = await fetch(Api);
      let data = await response.json();
      this.setState({
        title: data.title,
        datas: ds.cloneWithRows(data.subjects),
        loaded: true,
      });
    } catch(e) {
      console.log("Oops, error", e);
    }
  },
  render: function() {
    if (!this.state.loaded) {
      return (
        <View style={{flex:1}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicatorIOS color = {'#d43d3d'} />
          </View>
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          <View style={[styles.group]}>
            <Text style={[styles.groupTitle]}>{this.state.title}</Text>
          </View>
          <ListView
            dataSource={this.state.datas}
            renderRow={this._renderRow}
          />
        </ScrollView>
      );
    }
  },
  // rowData, sectionID, rowID, highlightRow
  _renderRow: function(movie: string, sectionID: number, rowID: number) {
    return (
      <View style={[styles.movie]}>
        <Image style={[{width: 96*3/5, height: 155*3/5,}]} source={{uri: movie.images.medium}} />
        <View style={[styles.movieRightBox]}>
          <Text style={[styles.movieTitle]}>{movie.title}</Text>
          <Rating rating={movie.rating}/>
          <View style={[{flex: 1, flexDirection: 'row', marginBottom: 5}]}>
            {movie.genres.map(function(genre){
              return <View style={[styles.cLabel]} key={genre}><Text style={[styles.cLabelText]}>{genre}</Text></View>
            })}
          </View>
          <Text style={[styles.movieText]}>导演：{movie.directors[0].name}</Text>
          <Text style={[styles.movieText]}>主演：
            {movie.casts.map(function(cast, index){
              return (index ? '/' : '') + cast.name
            })}
          </Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#F2F2F2',
    flex:1,
  },
  group: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
  },
  groupTitle: {
    paddingLeft: 10,
  },
  movie: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
  },
  movieRightBox: {
    flex: 1,
    marginLeft: 10,
  },
  movieTitle: {
    marginTop: 5,
    marginBottom: 5,
  },
  movieText: {
    fontSize: 10,
    color: '#666',
  },
  cLabel: {
    padding: 2,
    marginRight: 5,
    borderColor: 'red',
    borderRadius: 3,
    borderWidth: 1 / PixelRatio.get(),
  },
  cLabelText: {
    fontSize: 8,
    color: 'red',
  }
});
