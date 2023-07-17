document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-btn");

  loginButton.addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simple validation (for demonstration purposes)
      if (username === "user123" && password === "password123") {
          alert("Login successful!");
      } else {
          alert("Invalid username or password.");
      }
  });
});
