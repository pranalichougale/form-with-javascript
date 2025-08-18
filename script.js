document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let msg = document.getElementById("msg");

  if (user && pass) {
    msg.innerText = "Welcome " + user;
  } else {
    msg.innerText = "Please fill both fields!";
  }
});
