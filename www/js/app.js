// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
document.addEventListener("deviceready", function(){
  var browser = cordova.InAppBrowser.open('https://www.breeev.me','_system','location=no,zoom=no,hidden=yes,toolbar=no');
  
  browser.addEventListener("loadstop", function(){
    browser.show();
  });
}, false);
