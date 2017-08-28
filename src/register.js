require('./css/common.css');
import Layer from './components/register/register';

const App = function () {
  let dom = document.getElementById('app');
  let register = new Layer();

  dom.innerHTML = register.tpl({
    name: 'BubbleM',
    arr: ['a', 'b', 'c']
  });
};

new App();