function remove() {
  var elements = document.getElementsByClassName("fig-adb");
  
  [].forEach.call(elements, function (e) {
    e.outerHTML = "";
  });

  ['fig-chapo', 'fig-article-body'].forEach(function (className) {
    var elems = document.getElementsByClassName(className);
    [].forEach.call(elems, function (e) {
      e.style.color = "";
      e.style.textShadow = "";
    });
  });
}

setInterval(remove, 1000);
