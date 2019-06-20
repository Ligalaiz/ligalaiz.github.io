$(document).ready(function() {
    let header = $("#header"),
        intro = $("#intro"),
        introHeight = intro.innerHeight(),
        scrollOffset = $(window).scrollTop(), //Проскроленное расстояние от верха страницы

    // nav_toggle
        nav = $("#nav"),
        toggle = $("#navToggle"),
        links = $(".main-nav__link"),
        overlay = $("#overlay");

      // Fixed Header
    checkScroll(scrollOffset, introHeight);

    $(window).on("scroll resize", function(){ //scroll проверка наличия меню при скролле,
                                                //resize проверка наличия меню в десктопной версии
       introHeight = intro.innerHeight(); //Высота блока intro с учетом padding
       scrollOffset = $(this).scrollTop(); // Обновление текущей позиции скролла

       checkScroll(scrollOffset, introHeight);
    });

    function checkScroll(scrollOffset, introHeight) { // проверка наличия меню при обновлении страницы
      scrollOffset = $(this).scrollTop();

      if(scrollOffset >= introHeight) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {  //Выборка елементов с атрибутом data-scroll
      event.preventDefault();

      let $this = $(this),
          blockId = $(this).data("scroll"), // Значение из атрибута data-scroll
          blockOffset = $(blockId).offset().top; // отступ данного элемента от верха

      nav.removeClass("active"); // Скрытие меню при нажатии на путкт меню

      $("html, body").animate({  // Плавный скролл, Анимация прокрутки
        scrollTop: blockOffset
      }, 500); // Продолжительность анимации
    });

    //  Menu nav toogle
    toggle.on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      nav.toggleClass("active");
      overlay.toggleClass("active");

      if (toggle.hasClass("active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    });

    overlay.on("click", function(event) {
      event.preventDefault();

      $(this).removeClass("active");
      nav.removeClass("active");
      toggle.removeClass("active");

      if (toggle.hasClass("active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    });

    links.on("click", function(event) {
      event.preventDefault();

      overlay.removeClass("active");
      nav.removeClass("active");
      toggle.removeClass("active");

      if (toggle.hasClass("active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    });

    $(document).keyup(function(e) {
       if (e.key === "Escape") {
         overlay.removeClass("active");
         nav.removeClass("active");
         toggle.removeClass("active");
      }

      if (toggle.hasClass("active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    });

    $(".js-reviews").owlCarousel({
      loop:true,
      nav:false,
      dots:true,
      items:1,
    });
});
