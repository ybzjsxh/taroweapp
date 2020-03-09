import Taro, { useState, Config, useEffect } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtMessage, AtButton, AtIcon, AtFab, AtProgress } from 'taro-ui';

import './index.scss';

type stateType = {
  clicked: boolean;
  play: boolean;
};

const Main: Taro.FC<stateType> = props => {
  const [clicked, setClick] = useState(false);
  const [play, setPlay] = useState(true);
  const [audio, setAudio] = useState<any>(null);

  useEffect(() => {
    const audio = Taro.createInnerAudioContext();
    audio.autoplay = true;
    audio.loop = true;
    // audio.src =
    //   'http://122.226.161.23/amobile.music.tc.qq.com/C400002ndaeB1y8IQL.m4a?guid=9301745888&vkey=E87C433CC6759C45E222F21FB3D43BCC841C11808691DE8BDE0E73B4BDCD6FB75902FD30B43C4BDD2CDB95C1A91E87654EC6D3593667449D&uin=4076&fromtag=66';
    audio.onPlay(() => console.log('play'));
    audio.onPause(() => console.log('pause'));
    audio.onStop(() => console.log('stop'));
    setAudio(audio);
    return () => {
      audio.destroy();
    };
  }, []);

  const handlePlay = () => {
    play ? audio.pause() : audio.play();
    setPlay(!play);
  };

  const handleClick = () => {
    Taro.getScreenBrightness().then(res => console.log(res));
    Taro.makePhoneCall({ phoneNumber: '13738100624' })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    Taro.atMessage(
      clicked
        ? { type: 'success', message: 'Clicked', duration: 1000 }
        : { type: 'warning', message: 'Clicked', duration: 1000 },
    );
    setClick(!clicked);
  };
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
        displayMultipleItems={1}
      >
        <SwiperItem>
          <Image
            className="swiper-image"
            mode="aspectFill"
            src="https://dummyimage.com/600x450/f6f6f6/000"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            className="swiper-image"
            mode="aspectFill"
            src="https://dummyimage.com/600x450/purple/fff"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            className="swiper-image"
            mode="aspectFill"
            src="https://dummyimage.com/600x450/ff0e00/fff"
          />
        </SwiperItem>
      </Swiper>
      <View className="music-container">
        <Text className="music-title">《校花和流川枫》</Text>
        <View>
          <AtProgress color="red" percent={35} isHidePercent />
        </View>
        <AtFab className="music-fab" size="small" onClick={handlePlay}>
          <AtIcon value={play ? 'pause' : 'play'} />
        </AtFab>
      </View>
      <View>
        <AtButton
          className="button"
          type={clicked ? 'secondary' : 'primary'}
          onClick={() => handleClick()}
        >
          Click to change color
        </AtButton>
      </View>
    </View>
  );
};

export default connect(({}) => ({}))(Main);

Main.config = {
  navigationBarTitleText: '首页',
};
