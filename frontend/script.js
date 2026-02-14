//signup logic------------

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Signup successful! Please login.");
      window.location.href = "index.html";

    } catch (error) {
      alert("Signup failed");
    }
  });
}

// login logic-------------
console.log("script loaded");

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  console.log("login handler running");
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    // Save token
    localStorage.setItem("token", data.token);

    // Redirect to dashboard
    window.location.href = "dashboard.html";

  } catch (error) {
    alert("Login failed");
  }
});

