import assert from 'power-assert';
import Vue from 'vue';
import App from 'containers/App.vue';

describe('App.vue', () => {
  const vm = new Vue({
    render: h => h(App),
  }).$mount();

  it('should render content', () => {
    assert.equal(vm.$el.textContent, 'hello Pug!!!');
  });
});
