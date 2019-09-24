/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtCalendar, AtButton, AtCurtain } from 'taro-ui';

export default class Calendar extends Component {
  config = {
    navigationBarTitleText: '日历📆'
  };

  state = {
    isOpened: false
  };

  handleClick = () => {
    this.setState(prevProps => ({
      isOpened: !prevProps.isOpened
    }));
  };

  handleClose = () => {
    this.setState(prevProps => ({
      isOpened: !prevProps.isOpened
    }));
  };

  render() {
    const { isOpened } = this.state;
    return (
      <View>
        <AtCurtain isOpened={isOpened} onClose={this.handleClose}>
          <Image src='https://dummyimage.com/600x450/fff/000&text=yay' />
        </AtCurtain>
        <AtCalendar />
        <AtButton type='primary' onClick={this.handleClick}>
          点击有惊喜哟~
        </AtButton>
      </View>
    );
  }
}
