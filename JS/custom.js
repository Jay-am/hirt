$(document).ready(function () {
  $(".navbar-toggler-icon").click(function () {
    $(".click-menu-btn").toggleClass("change-btn");
    $(".navbar-collapse").fadeToggle();
  });

  $("<span>+</span>").insertAfter(
    ".navbar .navbar-nav li.menu-item-has-children>a"
  );

  $(".navbar .navbar-nav li span").click(function () {
    if ($(this).hasClass("rotate-icon")) {
      $(this).removeClass("rotate-icon");
      $(this).parent("li").children("ul.sub-menu").slideToggle();
    } else {
      var IsChild = $(this)
        .parent("li")
        .parent("ul")
        .parent("li")
        .hasClass("menu-item-has-children");
      if (IsChild == false) {
        $("li.menu-item-has-children").each(function (index) {
          if ($(this).children("span").hasClass("rotate-icon")) {
            $(this).children("ul.sub-menu").slideToggle();
            $(this).children("span").removeClass("rotate-icon");
          }
        });
      }
      $(this).parent("li").children("ul.sub-menu").slideToggle();
      $(this).addClass("rotate-icon");
    }
  });

  $(".navbar .navbar-toggler .navbar-toggler-icon").click(function () {
    $(".navbar .navbar-nav li span").next("ul").slideUp();
    $(".navbar .navbar-nav li span").removeClass("rotate-icon");
  });
  $(".navbar>.navbar-nav>li").click(function () {
    if ($(".navbar>.navbar-nav>li").not($(this)).hasClass("active")) {
      $(".navbar>.navbar-nav>li").removeClass("active");
    }
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("header").addClass("stickyHeader");
    } else {
      $("header").removeClass("stickyHeader");
    }
  });

  $(".leistungen-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    fade: true,
    dots: false,
    speed: 1000,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><img src='IMAGES/arrow_left.png' alt=''></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><img src='IMAGES/arrow_right.png' alt=''></button>",
  });

  $(
    ".branchen-inner-wrap .branchen-row .branchen-content ul li a[data-slide]"
  ).click(function (e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".leistungen-slider").slick("slickGoTo", slideno - 1);
  });

  $(".details-leistungen a").click(function (e) {
    e.preventDefault();
    $(".leistungen-slider").slick("slickGoTo", 0);
  });

  $(".leistungen-slide .container .first-slide-arrow").click(function (e) {
    e.preventDefault();
    $(".leistungen-slider").slick("slickGoTo", 1);
  });

  // if ($(window).width() > 1199) {
  //     $(window).scroll(function () {
  //         $('.leistungen-slider').slick('slickGoTo', 0);
  //     })
  // }
});
