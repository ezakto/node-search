#!/usr/bin/env node

var open = require('open');
var req = require('superagent');
var arg = require('minimist')(process.argv.slice(2), { boolean: ['o', 'open'] });
var url = 'http://nodejs.org/api/';
var o = arg.o || arg.open || (arg._[0] == 'open' ? arg._.shift() : false);

var keywords = arg._;
var page = arg.p || arg.page || 1;
var limit = arg.l || arg.limit || 5;

req.get(url + 'all.json').end(function(err, res){
    var api = [];
    if (!err && res.body) {
        map(api, res.body, null, 1);
        api = find(api, keywords);
        if (api.length) {
            if (o) open(api[0].url);
            else console.log('\n' + api.map(function(doc){
                return '- ' + doc.title + '\n  ' + doc.url;
            }).slice((page-1)*limit, (page-1)*limit + limit).join('\n\n') + '\n');
        }
    }
});

function find(target, keywords) {
  return target.filter(function(doc){
    return keywords.every(function(keyword){
      var regex = new RegExp(keyword, 'i');
      return regex.test(doc.parent + ' ' + doc.name);
    });
  });
}

function map(target, obj, parent, level, _url) {
  var result;

  if (obj.textRaw && obj.name) {
    result = {
      title: obj.textRaw,
      name: obj.name,
      parent: parent || ''
    };
    if (level == 2) {
        result.url = url + urlize(obj.name) + '.html';
        _url = result.url + '#' + urlize(obj.name) + '_';
    } else if (level > 2) {
        result.url = _url + urlize(result.title);
    }
    target.push(result);
  }

  level++;        
  for (var key in obj) {
    if (/^(globals|vars|classes|methods|properties|modules)$/i.test(key) && Array.isArray(obj[key])) {
      obj[key].forEach(function(articles){
        map(target, articles, result ? result.name : null, level, _url ? _url : null);
      });
    }
  }
};

function urlize(text) {
    return text.toLowerCase().replace(/[^a-z]+/g, '_').replace(/_+$/, '');
};