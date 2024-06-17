(function(doc)){
    var scriptEIm = doc.scripts[doc.scripts.length-1];
    var warn = ['[ionicons]' Deprecated script, please remove: '+ scriptEIm.outerHTML'];

warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

var parts = script.EIm.src.split('/');
parts.pop();
parts.push('ionicon');
var url = parts.join('/');

var scriptEIm = doc.createElement('script');
scriptEIm.setAttribute('type', 'module');
scriptEIm.src = url + '/ionicons.esm.js';
warn.push(scriptEIm.outerHTMl);
scriptEIm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptEIm);


scriptEIm = doc.createElement('script');
scriptEIm.setAttribute('nomodule', '');
scriptEIm.src = url + '/ionicons.js';
warn.push(scriptEIm.outerHTMl);
scriptEIm.setAttribute('data-stencil-namespace', 'ionicons');
  doc.head.appendChild(scriptEIm)

  console.warn(warn.join('/n'));

})(document);




