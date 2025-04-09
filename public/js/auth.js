// Here I have checked if token is present — redirect to login if not
function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) {
    alert("Please login to access this page.");
    window.location.href = "/login.html";
  }
  return token;
}

// This is Logout function
function logout() {
  localStorage.removeItem('token');
  window.location.href = "/login.html";
}
