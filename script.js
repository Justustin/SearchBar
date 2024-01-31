$(".input, .btn").focus(function(){
  $(".input").addClass("active")
}).blur(function(){
  $(".input").removeClass("active")
})