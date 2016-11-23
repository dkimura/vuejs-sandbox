import Vue from 'vue';
import App from './containers/App.vue';
import TodoItem from './components/TodoItem.vue';
import '../node_modules/todomvc-app-css/index.css';

// Temporary...
Vue.component('todo-item', TodoItem);

export default new Vue({
  el: '#app',
  render: h => h(App),
});
