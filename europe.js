function remove() {
  var elements = document.getElementsByClassName("ab-close ab-close-item");
  [].forEach.call(elements, function (e) {
    if (e && e.parentElement) {
      e.parentElement.outerHTML = ""
    }
  });
}

setInterval(remove, 1000);
