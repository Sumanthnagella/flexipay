document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("flexipay-user");
  if (!user && !location.pathname.endsWith("login.html") && !location.pathname.endsWith("index.html")) {
    window.location.href = "login.html";
  }

  const nameField = document.getElementById("user-name");
  if (nameField && user) {
    nameField.textContent = user;
  }
});

function logout() {
  localStorage.removeItem("flexipay-user");
  window.location.href = "index.html";
}
