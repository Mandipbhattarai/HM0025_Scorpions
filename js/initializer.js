


const userName = sessionStorage.getItem('userName');
const userEmail = sessionStorage.getItem('userEmail');
const userPhoto = sessionStorage.getItem('userPhoto');

// Update HTML elements with user credentials
document.getElementById("name").innerText = "Hi, " + (userName || "Unknown User");
