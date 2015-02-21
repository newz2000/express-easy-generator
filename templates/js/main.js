// You can delete all this vanilla.js and write your own code
// (works with jQuery, Angular and everything else too)

var loadLinks = function() {
  var thisLink = this;
  var ajax = new XMLHttpRequest();

  ajax.open("GET", "data", true);
  ajax.onreadystatechange = function() {
    if (ajax.readyState != 4 || ajax.status != 200) 
      return;

    var data = JSON.parse(ajax.responseText);
    thisLink.parentNode.removeChild(thisLink);
    showData(data);
  };
  ajax.send();

  return false;
}

var showData = function(data) {
  var linkNames = Object.getOwnPropertyNames(data);
  var links = '';

  linkNames.forEach(function(name) {
    links += '<li><a href="' + data[name] + '">' + name + '</a></li>';
  })
  document.getElementsByTagName('ul')[0].innerHTML = links;
}

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    var link = document.getElementById('loadData');

    link.onclick = loadLinks;
  }
}
