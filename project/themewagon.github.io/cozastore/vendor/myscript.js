      <script src="%PUBLIC_URL%/project/themewagon.github.io/cozastore/vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>;
$(".js-pscroll").each(function () {
  $(this).css("position", "relative");
  $(this).css("overflow", "hidden");
  var ps = new PerfectScrollbar(this, {
    wheelSpeed: 1,
    scrollingThreshold: 1000,
    wheelPropagation: false,
  });

  $(window).on("resize", function () {
    ps.update();
  });
});