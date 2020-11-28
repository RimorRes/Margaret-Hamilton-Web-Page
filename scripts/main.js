window.onscroll = function () {
  var w = window.innerWidth;
  var menu = document.getElementById('menu');
  var menu_list = document.getElementById('menu_list');
  "use strict";
  if (document.body.scrollTop >= w*(9/16) || document.documentElement.scrollTop >= w*(9/16) ) {
    menu_list.classList.add("menu-colored");
    menu_list.classList.remove("menu-transparent");
  }
  else {
    menu_list.classList.add("menu-transparent");
    menu_list.classList.remove("menu-colored");
  }
};
