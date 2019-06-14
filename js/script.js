$(document).ready(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop(), // текущий скролл страницы
      links = $(".main-header__link"),
      toggle = $("#nav_toggle");
        // Fixed Header
      checkScroll(scrollOffset);

  $(window).on("scroll", function() { // отступ при скролле

    scrollOffset = $(this).scrollTop(); // отступ при скролле px

    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) { // проверка наличия меню при обновлении страницы
    scrollOffset = $(this).scrollTop();

    if(scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
      // Smooth scroll
  $("[data-scroll]").on("click", function(event) { // Ловим события клика на атрибут data-scroll
    event.preventDefault();

    var $this = $(this),  // Сохранение нажатой ссылки в отдельную переменную
        blockId = $(this).data("scroll"),  //  Значение из атрибута data-scroll
        blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active"); // Удаление класса active у нажатой ссылки после нажатия другой ссылки
        $this.addClass("active"); // Дабавление класса active нажатой ссылке

        $("html, body").animate({ // Анимация прокрутки
          scrollTop: blockOffset
        }, 500); // Продолжительность анимации
  });
      //  Menu nav toogle
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("nav").toggleClass("active");
    $("#overlay").toggleClass("active");

    if (toggle.hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });

  $("#overlay").on("click", function(event) {
    event.preventDefault();

    $(this).removeClass("active");
    $("nav").removeClass("active");
    $("#nav_toggle").removeClass("active");

    if (toggle.hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });

  $(links).on("click", function(event) {
    event.preventDefault();

    $("#overlay").removeClass("active");
    $("nav").removeClass("active");
    $("#nav_toggle").removeClass("active");

    if (toggle.hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });


  $(document).keyup(function(e) {
     if (e.key === "Escape") {
       $("#overlay").removeClass("active");
       $("nav").removeClass("active");
       $("#nav_toggle").removeClass("active");
    }

    if (toggle.hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });

      //collapse
  $("[data-collapse]").on("click", function(event) {
    var $this = $(this),  // Сохранение нажатой ссылки в отдельную переменную
        blockId = $(this).data("collapse");  //  Значение из атрибута data-scroll

    $(this).toggleClass("active");
  });

  $(".reviews").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    navText:["",""]
  });

  $(".feedback").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    navText:["",""]
  });

});
