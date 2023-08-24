$(function () {
  $("#wrap").stop().hide();
  // 2.5초 로딩
  $(window).load(function () {
    $("#load")
      .stop()
      .delay(2500)
      .hide(0, function () {
        $("#wrap").stop().show(0);
      });
  });

  /*$("#wrap").stop().show(0);*/

  // 리사이즈
  $(window)
    .resize(function () {
      $("#slide1 ul").css("left", "0px");
      var w = $(window).width();
      var h = $(window).height();
      $("html, body").css({ width: w, height: h });
      // mediaQuery

      // w 391~1024
      if (
        matchMedia("screen and (min-width:391px) and (max-width:1024px)")
          .matches
      ) {
        for (var i = 0; i < 4; i++) {
          $("#slide4 div")
            .eq(i)
            .children("img")
            .attr("src", "img/box" + (i + 1) + "-2" + ".png");
          $("#slide1 .box" + (i + 1) + "back").attr(
            "src",
            "img/topside" + (i + 1) + ".png"
          );
        }
        return;
      }
      // w 1025~
      else if (matchMedia("screen and (min-width:1025px)").matches) {
        for (var i = 0; i < 4; i++) {
          $("#slide4 div")
            .eq(i)
            .children("img")
            .attr("src", "img/box" + (i + 1) + "-1" + ".png");
          $("#slide1 .box" + (i + 1) + "back").attr(
            "src",
            "img/topside" + (i + 1) + ".png"
          );
        }
        return;
      }
      // w ~390
      else {
        for (var i = 0; i < 4; i++) {
          $("#slide4 div")
            .eq(i)
            .children("img")
            .attr("src", "img/box" + (i + 1) + "-3" + ".png");
          $("#slide1 .box" + (i + 1) + "back").attr(
            "src",
            "img/topside" + (i + 1) + "-" + (i + 1) + ".png"
          );
        }
      }
      return;
    }).resize();
  $(window).trigger("resize");

  // 스크롤 페이드인

  /* $(window).scroll(function () {
    var from = $(window).scrollTop(); // 윈도우 스크롤탑
    // slide4 scroll
    $(".all").each(function () {
      var Slide4Top = $(this).offset().top;
      if (from > Slide4Top / 1.4) {
        $("#slide4 span").fadeIn(2000);
        $(".all")
          .eq(0)
          .stop()
          .animate({ opacity: 1, top: 0 }, 500, function () {
            $(".all")
              .eq(1)
              .stop()
              .animate({ opacity: 1, top: 0 }, 700, function () {
                $(".all").eq(2).stop().animate({ opacity: 1, top: 0 }, 1000);
              });
          });
      }
    });

    // perfume scroll
    $("#slide3 .perfume").each(function () {
      var Slide3Top = $(this).parent("div").offset().top;
      // perfume opacity
      if (from > Slide3Top / 1.3) {
        $(this).parent().stop().animate({ opacity: 1 }, 500);
        $(this).stop().animate({ opacity: 1 }, 0);
      }
    });
  });
*/


  /*************************************************
      서브페이지 버튼 클릭
*************************************************/

  $(".more").click(function () {
    $("<a>")
      .prop({
        target: "_blank",
        href: "sub1.html",
      })[0]
      .click();
  });

  $(".pro img, .pro button, .pro p").click(function () {
    $("<a>")
      .prop({
        href: "sub2.html",
      })[0]
      .click();
  });

  if (
    matchMedia("screen and (min-width:391px) and (max-width:1024px)").matches
  ) {
    $(".icon .plus").attr("src", "img/sub1/plus2.png");
    $(".icon .minus").attr("src", "img/sub1/minus2.png");
  } else if (matchMedia("screen and (min-width:1025px)").matches) {
    $(".icon .plus").attr("src", "img/sub1/plus2.png");
    $(".icon .minus").attr("src", "img/sub1/minus2.png");
  }

  var i = 1;
  var price = 19000;

  $(".icon .plus").click(function () {
    i++;

    if (i > 99) {
      alert("최대 수량은 99개입니다.");
      i = 99;
    }

    var Allprice = i * price;
    var Lastprice = Allprice.toLocaleString();
    $(".pronum span").html(i);
    $(".proprice span").html(Lastprice);
  });

  $(".icon .minus").click(function () {
    i--;

    if (i == 0) {
      alert("최소 수량은 1개입니다.");
      i = 1;
    }

    var Allprice = i * price;
    var Lastprice = Allprice.toLocaleString();
    $(".pronum span").html(i);
    $(".proprice span").html(Lastprice);
  });
});
