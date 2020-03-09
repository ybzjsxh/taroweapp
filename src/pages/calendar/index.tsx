/* eslint-disable react/sort-comp */
import Taro, { useState } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Image } from '@tarojs/components';
import { AtCalendar, AtButton, AtCurtain } from 'taro-ui';

const Calendar: Taro.FC = props => {
  const [isOpened, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpened);
  };
  return (
    <View>
      <AtCurtain isOpened={isOpened} onClose={() => handleClick()}>
        <Image src="https://dummyimage.com/600x450/fff/000&text=yay" />
      </AtCurtain>
      <AtCalendar />
      <AtButton type="primary" onClick={() => handleClick()}>
        点击有惊喜哟~
      </AtButton>
    </View>
  );
};

export default connect(({}) => ({}))(Calendar);

Calendar.config = {
  navigationBarTitleText: '日历📆',
};
