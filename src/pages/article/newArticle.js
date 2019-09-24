/* eslint-disable react/sort-comp */

import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtButton, AtInput, AtForm, AtTextarea } from 'taro-ui';

import './newArticle.less';

@connect(({ article }) => ({ ...article }))
class NewArticle extends Component {
  state = {
    title: '',
    article: ''
  };

  config = {
    navigationBarTitleText: '新建文章'
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  handleReset = () => {
    this.setState({
      title: '',
      article: ''
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e
    });
  };

  handleArticleChange = e => {
    this.setState({
      article: e.target.value
    });
  };

  componentDidMount() {
    this.setState({});
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { title, article } = this.state;
    return (
      <View>
        <AtForm
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          className='form'
        >
          <AtInput
            title='标题'
            value={title}
            onChange={this.handleTitleChange}
          />
          <AtTextarea
            title='asdf'
            value={article}
            height={300}
            placeholder='在这里输入正文~'
            showConfirmBar
            onChange={this.handleArticleChange}
          />
          <AtButton type='primary' formType='submit' className='btn-submit'>
            提交
          </AtButton>
          <AtButton type='primary' formType='reset' className='btn-reset'>
            重置
          </AtButton>
        </AtForm>
      </View>
    );
  }
}

export default NewArticle;
