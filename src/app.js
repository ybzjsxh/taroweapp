import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import dva from './utils/dva';
import models from './models';

import Main from './pages/main';
import './app.less';

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: ['pages/main/index', 'pages/about/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/main/index',
          text: '首页',
          iconPath: './assets/tabbar/index.png',
          selectedIconPath: 'assets/tabbar/index-active.png'
        },
        {
          pagePath: 'pages/about/index',
          text: '关于',
          iconPath: './assets/tabbar/user.png',
          selectedIconPath: 'assets/tabbar/user-active.png'
        }
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    }
  };

  componentDidMount() {}

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
