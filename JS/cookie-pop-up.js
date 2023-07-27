// ALT

// $("#accept").on('click',function(){
//   localStorage.setItem("cookieSaved","yes");
//   $("#cookie-popup").addClass("hidden");
// })

// window.onload = () =>
// {
//   var getCookie = localStorage.getItem("cookieSaved");
//   if(getCookie == "yes")
//   {
//       $("#cookie-popup").addClass("hidden");
//   }
//   else
//   {
//       $("#cookie-popup").removeClass("hidden");
//   }
// }


// NEU


function getCookiePreferences() {
  const preferences = JSON.parse(localStorage.getItem('cookiePreferences'));
  return preferences || {
      necessary: true,
      analytical: false,
      marketing: false
  };
}

function saveCookiePreferences(preferences) {
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
}

document.querySelector('.js-cookie-accept').onclick = function () {
  const preferences = getCookiePreferences();
  preferences.analytical = true;
  preferences.marketing = true;
  saveCookiePreferences(preferences);
  hideCookiePopUp();
};

document.querySelector('.js-cookie-reject').onclick = function () {
  const preferences = getCookiePreferences();
  preferences.analytical = false;
  preferences.marketing = false;
  saveCookiePreferences(preferences);
  hideCookiePopUp();
};

document.querySelector('.js-cookie-save').onclick = function () {
  const preferences = getCookiePreferences();
  preferences.analytical = document.querySelector('input[name="analytical-cookies"]').checked;
  preferences.marketing = document.querySelector('input[name="marketing-cookies"]').checked;
  saveCookiePreferences(preferences);
  hideCookiePopUp();
};

document.getElementById("js-cookies-manage").onclick = function () {
  var categories = document.getElementById("cookie-categories");
  categories.classList.toggle("active");
  this.classList.toggle("open");
};

function hideCookiePopUp() {
  document.querySelector('.cookie-pop-up').style.display = 'none';
}

window.onload = function () {
  const preferences = getCookiePreferences();

  // Update the state of the checkboxes to match the stored preferences
  document.querySelector('input[name="analytical-cookies"]').checked = preferences.analytical;
  document.querySelector('input[name="marketing-cookies"]').checked = preferences.marketing;

  // If preferences have been saved, hide the cookie pop-up
  if (localStorage.getItem('cookiePreferences')) {
      hideCookiePopUp();
  }
}