import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import 'taro-ui/dist/style/index.scss';
import dva from './utils/dva';
import models from './models';

import Main from './pages/main';
import './app.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  componentDidMount() {}

  config = {
    pages: [
      'pages/main/index',
      'pages/calendar/index',
      'pages/maps/index',
      'pages/article/index',
      'pages/article/article',
      'pages/article/newArticle',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/main/index',
          text: '首页',
          iconPath: './assets/tabbar/index.png',
          selectedIconPath: 'assets/tabbar/index-active.png',
        },
        {
          pagePath: 'pages/calendar/index',
          text: '日历',
          iconPath: './assets/tabbar/calendar.png',
          selectedIconPath: 'assets/tabbar/calendar-active.png',
        },
        {
          pagePath: 'pages/maps/index',
          text: '地图',
          iconPath: './assets/tabbar/maps.png',
          selectedIconPath: 'assets/tabbar/maps-active.png',
        },
        {
          pagePath: 'pages/article/index',
          text: '文章',
          iconPath: './assets/tabbar/articles.png',
          selectedIconPath: 'assets/tabbar/articles-active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
    permission: {
      'scope.userLocation': {
        desc: '是的要你的定位权限，怕不怕',
      },
    },
  };

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
