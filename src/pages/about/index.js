import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';
import { AtNavBar, AtCalendar, AtToast } from 'taro-ui';

@connect(
  ({ about }) => ({ ...about }),
  dispatch => ({})
)
class About extends Component {
  state = {
    isOpened: false
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

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { isOpened } = this.state;
    return (
      <View>
        <AtToast isOpened={isOpened} text="You clicked" icon="check" />
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color="#000"
          leftText="返回"
          leftIconType="chevron-left"
        />
        <Text className="text">这是一个日历</Text>
        <AtCalendar />
        <View className="at-article">
          <View className="at-article__h1">这是一级标题这是一级标题</View>
          <View className="at-article__info">
            2017-05-07&nbsp;&nbsp;&nbsp;这是作者
          </View>
          <View className="at-article__content">
            <View className="at-article__section">
              <View className="at-article__h2">这是二级标题</View>
              <View className="at-article__h3">这是三级标题</View>
              <View className="at-article__p">
                这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </View>
              <View className="at-article__p">
                这是文本段落。这是文本段落。
              </View>
              <Image
                className="at-article__img"
                src="https://jdc.jd.com/img/400x400"
                mode="widthFix"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default About;
