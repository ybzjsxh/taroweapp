/* eslint-disable react/sort-comp */

import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtButton, AtInput, AtForm, AtTextarea } from 'taro-ui';

import './newArticle.scss';
import { CommonEvent } from '@tarojs/components/types/common';

const NewArticle: Taro.FC = props => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const handleSubmit = (e: CommonEvent) => {
    e.preventDefault();
    console.log(e);
  };

  const handleReset = () => {
    setTitle('');
    setArticle('');
  };

  const handleTitleChange = e => {
    setTitle(e);
  };

  const handleArticleChange = e => {
    setArticle(e.target.value);
  };
  return (
    <View>
      <AtForm onSubmit={e => handleSubmit(e)} onReset={() => handleReset()} className="form">
        <AtInput name="haha" title="标题" value={title} onChange={handleTitleChange} />
        <AtTextarea
          value={article}
          height={300}
          placeholder="在这里输入正文~"
          showConfirmBar
          onChange={handleArticleChange}
        />
        <AtButton type="primary" formType="submit" className="btn-submit">
          提交
        </AtButton>
        <AtButton type="primary" formType="reset" className="btn-reset">
          重置
        </AtButton>
      </AtForm>
    </View>
  );
};

export default connect(({})=>({}))(NewArticle);

NewArticle.config = {
  navigationBarTitleText: '新建文章',
};
