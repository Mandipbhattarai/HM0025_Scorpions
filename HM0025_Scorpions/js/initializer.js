

const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('userName');
const userEmail = urlParams.get('userEmail');
const userPhoto = urlParams.get('userPhoto');

// Update HTML elements with user credentials
document.getElementById("name").innerText = "Hi, "+userName || "Unknown User";

