require('./css/common.css');
import Layer from './components/layer/layer';

const App = function () {
  let dom = document.getElementById('app');
  let layer = new Layer();

  dom.innerHTML = layer.tpl({
    name: 'BubbleM',
    arr: ['a', 'b', 'c']
  });
};

new App();

