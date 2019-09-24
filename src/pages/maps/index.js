/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { Map } from '@tarojs/components';

import './index.less'

@connect(()=>{})
export default class Maps extends Component {
  config = {
    navigationBarTitleText: '地图🗺'
  }

  state = {
    latitude: '',
    longitude: '',
    markers: []
  }

  componentDidMount(){
    let myMap = Taro.createMapContext('mymap')
    Taro.authorize({scope: 'scope.userLocation'}).then(res=>console.log(res))
    Taro.getLocation({type: 'wgs84'})
    .then(res=>this.setState({latitude: res.latitude, longitude: res.longitude, markers: [{id: 1, name: 'mymap', color: '#f6f6f6', display: 'ALWAYS'}]}))
    myMap.moveToLocation()
  }

  render () {
    // getLocation需要再app.js的config里面加上permission
    const { latitude, longitude, markers } = this.state;
    return (
      <Map
        id='mymap'
        latitude={latitude}
        longitude={longitude}
        circles
        scale={18}
        markers={markers}
        showLocation
      />
    )
  }
};
