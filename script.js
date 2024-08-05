document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const fullname = document.getElementById("fullname").value;
      const nickname = document.getElementById("nickname").value;
      const birthplace = document.getElementById("birthplace").value;
      const birthdate = document.getElementById("birthdate").value;
      const domicile = document.getElementById("domicile").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = {
        fullname,
        nickname,
        birthplace,
        birthdate,
        domicile,
        email,
        password,
      };

      localStorage.setItem(email, JSON.stringify(user));
      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = JSON.parse(localStorage.getItem(email));

      if (user && user.password === password) {
        sessionStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "ProfilTizaFarhaniMaulia.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  const logoutButton = document.getElementById("logoutButton");
  const loginLink = document.getElementById("loginLink");
  const profileSection = document.getElementById("profileSection");
  const universitySection = document.getElementById("universitySection");

  if (sessionStorage.getItem("loggedInUser")) {
    if (logoutButton) logoutButton.style.display = "block";
    if (loginLink) loginLink.style.display = "none";
    if (profileSection) profileSection.style.display = "block";
    if (universitySection) universitySection.style.display = "block";
  } else {
    window.location.href = "login.html";
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      sessionStorage.removeItem("loggedInUser");
      alert("You have logged out.");
      window.location.href = "login.html";
    });
  }
});
