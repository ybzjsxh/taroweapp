import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';

@connect(({ about }) => ({...about}), dispatch => ({}))
class About extends Component {
  config = {
    navigationBarTitleText: '关于'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default About;
