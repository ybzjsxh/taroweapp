import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtMessage, AtButton } from 'taro-ui';

import './index.less'

@connect(({ main, loading }) => ({ ...main, ...loading }))
export default class Main extends Component {
  state = {
    clicked: false
  };

  config = {
    navigationBarTitleText: '首页'
  };

  handleClick = () => {
    const { clicked } = this.state;
    Taro.atMessage(clicked ? { type: 'success', message: 'Clicked', duration: 1000 } : { type: 'warning', message: 'Clicked', duration: 1000 });
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    const { clicked } = this.state;
    return (
      <View>
        <AtMessage />
        <Swiper
          className="swiper-container"
          indicatorColor="#999"
          indicatorActiveColor="green"
          horizontal
          circular
          indicatorDots
          autoplay
          displayMultipleItems
        >
          <SwiperItem>
            <Image mode="scaleToFill" src="https://dummyimage.com/812x450/f6f6f6/fff" />
          </SwiperItem>
          <SwiperItem>
            <Image mode="scaleToFill" src="https://dummyimage.com/812x450/00ffff/fff" />
          </SwiperItem>
          <SwiperItem>
            <Image mode="scaleToFill" src="https://dummyimage.com/812x450/purple/fff" />
          </SwiperItem>
        </Swiper>
        <View>
          <AtButton
            className="button"
            type={clicked ? 'secondary' : 'primary'}
            onClick={this.handleClick}
          >
            Click to change color
          </AtButton>
        </View>
      </View>
    );
  }
}
