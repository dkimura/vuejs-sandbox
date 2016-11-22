import Vue from 'vue';
import App from '../src/App.vue';

describe('App.vue', () => {
  it('should render content', () => {
    const vm = new Vue({
      render: h => h(App),
    });
  });
});
