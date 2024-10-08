/// <reference types="../@types/jquery" />

//////////////////////
$(".locker").on("click", function () {
  $(".box").css({ display: "block" });
  $(".locker").animate({ left: "250px" }, 500);
});
$(".box i").on("click", function () {
  $(".box").animate({ width: "toggle" }, 1000);
  $(".locker").animate({ left: "30px" }, 1000);
});
//////////////////////////
$(function () {
  $("#singers div:first").show();
  $("#singers h3").on("click", function () {
    $(this).next().slideToggle(500);
    $("#singers div").not($(this).next()).slideUp(500);
  });
});
//////////////////////////

function countdown() {
  let now = new Date();
  let eventDate = new Date(2024, 12, 30);

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24) - 30;

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").innerHTML = `<h3>${d} D</h3>`;
  document.getElementById("hours").innerHTML = `<h3>${h} H</h3>`;
  document.getElementById("minutes").innerHTML = `<h3>${m} M</h3>`;
  document.getElementById("seconds").innerHTML = `<h3>${s} S</h3>`;

  setTimeout(countdown, 1000);
}

countdown();
/////////////////////////

$(function () {
  var max = 100;
  $("textarea").on("keyup", function () {
    var length = $(this).val().length;
    var character = max - length;
    console.log(character);
    if (character <= 0) {
      $("#char").text("your available character finished");
    } else {
      $("#char").text(character);
    }
  });
});
