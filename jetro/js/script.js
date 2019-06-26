"use strict";

$(document).ready(function() {

  var btn = document.querySelector(".main-header__nav--btn");
  var menu = document.querySelector(".main-header__list");

  if (btn) {
    btn.addEventListener ("click", function(evt) {
      evt.preventDefault();
      menu.classList.toggle("show");
      btn.classList.toggle("menu-open");
      btn.classList.toggle("menu-close");
    });
  }

  if (window) {
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (menu.classList.contains("show")) {
          evt.preventDefault();
          menu.classList.remove("show");
          btn.classList.remove("menu-close");
          btn.classList.add("menu-open");
        }
      }
    });
  }

  $(".js-slider").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });
});

function initMap() {
  var pos = {lat: 52.134646, lng: -106.647721};
  var opt = {
    center: pos,
    zoom: 15,
  };
  var myMap = new google.maps.Map(document.getElementById('map'), opt);
  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: "Jetro"
  });
}
