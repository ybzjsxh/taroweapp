/* eslint-disable react/sort-comp */

import Taro, { useState, useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtList, AtListItem, AtButton } from 'taro-ui';

import './index.scss';

type dataType = {
  id: number;
  title: string;
  updateTime: string;
};

const a: dataType[] = [
  {
    id: 1,
    title: 'asdf',
    updateTime: `${new Date()
      .toLocaleString()
      .replace(/(上|下)午/g, '')
      .replace(/\//g, '-')}`,
  },
  {
    id: 2,
    title: '112313',
    updateTime: `${new Date()
      .toLocaleString()
      .replace(/(上|下)午/g, '')
      .replace(/\//g, '-')}`,
  },
];

const ArticleList: Taro.FC = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(a);
  }, []);

  const handleClick = id => {
    console.log(id);
    Taro.navigateTo({
      url: `/pages/article/article?id=${id}`,
    });
  };

  const addNewArticle = () => {
    console.log('click');
    Taro.navigateTo({
      url: `/pages/article/newArticle`,
    });
  };
  return (
    <View>
      <View className="btn-group">
        <AtButton size="small" type="primary" disabled>
          新建文章
        </AtButton>
        <AtButton
          size="small"
          type="primary"
          className="add_new_article"
          onClick={() => addNewArticle()}
        >
          新建文章
        </AtButton>
      </View>
      <AtList>
        {data.map((v: dataType) => (
          <AtListItem
            title={v.title}
            note={v.updateTime}
            arrow="right"
            hasBorder
            iconInfo={{ size: 25, color: '#78A4FA', value: 'list' }}
            key={v.id}
            onClick={() => handleClick(v.id)}
          />
        ))}
      </AtList>
    </View>
  );
};

export default connect(({ id }) => ({ id }))(ArticleList);

ArticleList.config = {
  navigationBarTitleText: '文章',
};
