/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtList, AtListItem, AtButton, AtIcon } from 'taro-ui';

import './index.less';

@connect(({ article }) => ({ ...article }))
class Article extends Component {
  state = {
    data: []
  };

  config = {
    navigationBarTitleText: '文章'
  };

  handleClick = id => {
    console.log(id);
    Taro.navigateTo({
      url: `/pages/about/index?id=${id}`
    });
  };

  addNewArticle = () => {
    console.log('click');
    Taro.navigateTo({
      url: `/pages/article/newArticle`
    });
  };

  componentDidMount() {
    this.setState({
      data: [
        {
          id: 1,
          title: 'asdf',
          updatetime: `${new Date()
            .toLocaleString()
            .replace(/(上|下)午/g, '')
            .replace(/\//g, '-')}`
        },
        {
          id: 2,
          title: '112313',
          updatetime: `${new Date()
            .toLocaleString()
            .replace(/(上|下)午/g, '')
            .replace(/\//g, '-')}`
        }
      ]
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { data } = this.state;
    return (
      <View>
        <View className='btn-group'>
          <AtButton size='small' type='primary' disabled>
            新建文章
          </AtButton>
          <AtButton
            size='small'
            type='primary'
            className='add_new_article'
            onClick={this.addNewArticle}
          >
            新建文章
          </AtButton>
        </View>
        <AtList>
          {data.map(v => (
            <AtListItem
              title={v.title}
              note={v.updatetime}
              arrow='right'
              hasBorder
              iconInfo={{ size: 25, color: '#78A4FA', value: 'list' }}
              key={v.id}
              onClick={() => this.handleClick(v.id)}
            />
          ))}
        </AtList>
      </View>
    );
  }
}

export default Article;
