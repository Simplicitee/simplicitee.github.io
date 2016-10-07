main = function() {
  var percent = document.getElementById("bar").style.width;
  if (percent === 100%) {
    document.getElementById("bar").style.width = "0%";
  } else {
    var p = parseFloat(percent) + 1;
    p += "%";
    document.getElementById("bar").style.width = p;
  }
};

document.ready(main());
