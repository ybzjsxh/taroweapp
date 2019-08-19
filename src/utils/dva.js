import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  app = create(opt);
  app.use(createLoading({}));

  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registerd) opt.models.forEach(model => app.model(model));
  global.registerd = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
