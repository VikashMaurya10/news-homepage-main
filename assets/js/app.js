$(".ham-btn").click((e) => {
  e.preventDefault();
  $(".ham-btn").addClass("d-n");
  $(".close-btn").removeClass("d-n");
  $(".links").addClass("show-nav");
  $("body").addClass("fade-in");
});
$(".close-btn").click((e) => {
  $(".close-btn").addClass("d-n");
  $(".ham-btn").removeClass("d-n");
  $(".links").removeClass("show-nav");
  $("body").removeClass("fade-in");
});
