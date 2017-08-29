var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const data = {
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
  };

  res.render('index', data);
});

module.exports = router;
