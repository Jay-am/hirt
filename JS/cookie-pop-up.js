$("#accept").on('click',function(){
  localStorage.setItem("cookieSaved","yes");
  $("#cookie-popup").addClass("hidden");
})

window.onload = () =>
{
  var getCookie = localStorage.getItem("cookieSaved");
  if(getCookie == "yes")
  {
      $("#cookie-popup").addClass("hidden");
  }
  else
  {
      $("#cookie-popup").removeClass("hidden");
  }
}