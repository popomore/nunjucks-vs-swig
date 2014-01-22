var fs = require('fs');
var nunjucks = require('nunjucks');
var swig = require('swig');

var code = fs.readFileSync('simple.html').toString();
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
  nunjucks.renderString(code, data, done);
}

swig.setDefaults({ cache: 'memory' });
function doSwig() {
  swig.render(code, data);
}

require('bench').runMain();
