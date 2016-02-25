#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var open = require('open');
var mkdirp = require('mkdirp');
var req = require('superagent');
var arg = require('minimist')(process.argv.slice(2), { boolean: ['o', 'open', 'v', 'verbose'] });
var url = 'https://nodejs.org/api/';
var o = arg.o || arg.open || (arg._[0] == 'open' ? arg._.shift() : false);

var keywords = arg._;
var page = arg.p || arg.page || 1;
var limit = arg.l || arg.limit || 5;
var verbose = arg.v || arg.verbose || false;
var cache = join(process.env.HOME || process.env.USERPROFILE, '.cache', 'nodeapi');

try {
  search(JSON.parse(fs.readFileSync(join(cache, 'api.json'), { encoding: 'utf8' })));
} catch(e) {
  req.get(url + 'all.json').end(function(err, res){
      var api = [];
      if (!err && res.body) {
          map(api, res.body, null, 1);
          mkdirp(cache);
          fs.writeFileSync(join(cache, 'api.json'), JSON.stringify(api));
          search(api);
      }
  });
}

function search(api) {
  api = find(api, keywords);
  if (api.length) {
      if (o) open(api[0].url);
      else console.log('\n' + api.map(function(doc){
          return '- ' + doc.title + '\n  ' + doc.url + (verbose ? '\n  ' + doc.desc : '');
      }).slice((page-1)*limit, (page-1)*limit + limit).join('\n\n') + '\n');
  }
}

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
      desc: obj.desc ? cleanhtml(obj.desc) : '',
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

function cleanhtml(str) {
    return str.split('\n').slice(0, 2).join(' ').replace(/<\/?[a-z0-9][^>]*>|&[a-z0-9#]+;/g, '').substr(0, 200) + ' (...)';
}