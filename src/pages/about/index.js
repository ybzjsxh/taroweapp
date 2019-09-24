/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtNavBar, AtToast, AtNoticebar } from 'taro-ui';

import './index.less';

@connect(({ about }) => ({ ...about }))
class About extends Component {
  state = {
    isOpened: false,
    title: ''
  };

  config = {
    navigationBarTitleText: '关于'
  };

  handleClick = () => {
    this.setState(prevProps => ({
      isOpened: !prevProps.isOpened
    }));
    console.log('clicked');
  };

  componentWillMount() {
    this.setState({
      title: this.$router.params.id
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { isOpened, title } = this.state;
    return (
      <View>
        <AtToast isOpened={isOpened} text='You clicked' icon='check-circle' />
        <AtNoticebar icon='volume-plus' marquee>
          {title}
        </AtNoticebar>
        <View className='at-article'>
          <View className='at-article__h1'>{title}</View>
          <View className='at-article__info'>2019-08-21 这是作者</View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__h2'>这是二级标题</View>
              <View className='at-article__h3'>这是三级标题</View>
              <View className='at-article__p'>
                这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </View>
              <View className='at-article__p'>
                这是文本段落。这是文本段落。
              </View>
              <Image
                className='at-article__img'
                src='https://jdc.jd.com/img/400x400'
                mode='widthFix'
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default About;
