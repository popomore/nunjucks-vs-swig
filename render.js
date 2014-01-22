var nunjucks = require('nunjucks');
var swig = require('swig');

var data = {
  header: 'Colors',
  items: [{
    name: 'red',
    current: true,
    url: '#Red'
  }, {
    name: 'green',
    current: false,
    url: '#Green'
  }, {
    name: 'blue',
    current: false,
    url: '#Blue'
  }]
};

exports.compare = {
  swig: doSwig,
  nunjucks: doNunjucks
};

function doNunjucks(done) {
  nunjucks.render('simple.html', data, done);
}

swig.setDefaults({ cache: 'memory' });
function doSwig(done) {
  swig.renderFile('simple.html', data, done);
}

require('bench').runMain();
