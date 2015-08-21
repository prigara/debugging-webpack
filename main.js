var greeting = require("./greeting.js");

(function () {
    var welcomeBtn = document.getElementById("welcomeBtn");
    var welcomeMsg = document.getElementById("welcomeMsg");

    welcomeBtn.addEventListener('click',  function(){ greeting(welcomeMsg)});
})();
