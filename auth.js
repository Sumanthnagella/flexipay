function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please enter all fields.");
    return;
  }

  const stored = localStorage.getItem("user-" + username);
  if (stored && JSON.parse(stored).password === password) {
    localStorage.setItem("flexipay-user", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Try again or Signup.");
  }
}

function signup() {
  const username = prompt("Choose a username:");
  const password = prompt("Choose a password:");
  if (username && password) {
    localStorage.setItem("user-" + username, JSON.stringify({ password }));
    alert("Signup successful! Please login.");
  }
}
