require('./css/common.css');
import Layer from './components/login/login';

const App = function () {
  let dom = document.getElementById('app');
  let login = new Layer();

  dom.innerHTML = login.tpl({
    name: 'BubbleM',
    arr: ['a', 'b', 'c']
  });
};

new App();