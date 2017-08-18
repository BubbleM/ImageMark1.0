require('./css/common.css');
import Index from './components/index/index';
import './components/index/main';

const App = function () {
  let dom = document.getElementById('app');
  let index = new Index();

  dom.innerHTML = index.tpl({
    name: 'BubbleM',
    arr: [{
      'title': '高效免费的数据标记平台',
      'content': `Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍`,
      'img': '../../assets/1.JPG'
    },{
      'title': '高效免费的数据标记平台',
      'content': `Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍`,
      'img': '../../assets/1.JPG'
    },{
      'title': '高效免费的数据标记平台',
      'content': `Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍`,
      'img': '../../assets/1.JPG'
    },{
      'title': '高效免费的数据标记平台',
      'content': `Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍
        Amazing是基于深度学习的....一大段介绍`,
      'img': '../../assets/1.JPG'
    }]
  });
};

new App();

