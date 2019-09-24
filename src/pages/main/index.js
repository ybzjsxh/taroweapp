/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtMessage, AtButton, AtIcon, AtFab, AtProgress } from 'taro-ui';

import './index.less';

@connect(({ main, loading }) => ({ ...main, ...loading }))
export default class Main extends Component {
  state = {
    clicked: false,
    play: true,
    audio: ''
  };

  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount() {
    let audio = Taro.createInnerAudioContext();
    audio.autoplay = true;
    audio.loop = true;
    // audio.src =
    //   'http://122.226.161.23/amobile.music.tc.qq.com/C400002ndaeB1y8IQL.m4a?guid=9301745888&vkey=E87C433CC6759C45E222F21FB3D43BCC841C11808691DE8BDE0E73B4BDCD6FB75902FD30B43C4BDD2CDB95C1A91E87654EC6D3593667449D&uin=4076&fromtag=66';
    audio.onPlay(() => console.log('play'));
    audio.onPause(() => console.log('pause'));
    audio.onStop(() => console.log('stop'));
    this.setState(() => ({
      audio
    }));
  }

  componentWillUnmount() {
    this.state.audio.destroy();
  }

  handlePlay = () => {
    this.state.play ? this.state.audio.pause() : this.state.audio.play();
    this.setState(prevProps => ({
      play: !prevProps.play
    }));
  };

  handleClick = () => {
    Taro.getScreenBrightness().then(res => console.log(res));
    Taro.makePhoneCall({ phoneNumber: '13738100624' })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    const { clicked } = this.state;
    Taro.atMessage(
      clicked
        ? { type: 'success', message: 'Clicked', duration: 1000 }
        : { type: 'warning', message: 'Clicked', duration: 1000 }
    );
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    const { clicked, play } = this.state;
    return (
      <View>
        <AtMessage />
        <Swiper
          className='swiper-container'
          indicatorColor='#999'
          indicatorActiveColor='green'
          horizontal
          circular
          indicatorDots
          autoplay
          displayMultipleItems
        >
          <SwiperItem>
            <Image
              className='swiper-image'
              mode='aspectFill'
              src='https://dummyimage.com/600x450/f6f6f6/000'
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className='swiper-image'
              mode='aspectFill'
              src='https://dummyimage.com/600x450/purple/fff'
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className='swiper-image'
              mode='aspectFill'
              src='https://dummyimage.com/600x450/ff0e00/fff'
            />
          </SwiperItem>
        </Swiper>
        <View className='music-container'>
          <Text className='music-title'>《校花和流川枫》</Text>
          <View>
            <AtProgress color='red' percent={35} isHidePercent />
          </View>
          <AtFab className='music-fab' size='small' onClick={this.handlePlay}>
            <AtIcon value={play ? 'pause' : 'play'} />
          </AtFab>
        </View>
        <View>
          <AtButton
            className='button'
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
