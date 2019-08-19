import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

@connect(({ main, loading }) => ({ ...main, ...loading }))
export default class Main extends Component {
  state = {
    clicked: false
  }
  config = {
    navigationBarTitleText: '首页'
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <View>
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
            <Image src='https://dummyimage.com/600x400/000/fff' />
          </SwiperItem>
          <SwiperItem>
            <Image src='https://dummyimage.com/600x400/000/fff' />
          </SwiperItem>
          <SwiperItem>
            <Image src='https://dummyimage.com/600x400/000/fff' />
          </SwiperItem>
        </Swiper>
        <View>
          <Button type={clicked ? 'warn' : 'primary'} onClick={this.handleClick}>Click to change color</Button>
        </View>
      </View>
    );
  }
}
