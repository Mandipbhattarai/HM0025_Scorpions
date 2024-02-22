<<<<<<< HEAD


const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('userName');
const userEmail = urlParams.get('userEmail');
const userPhoto = urlParams.get('userPhoto');

// Update HTML elements with user credentials
document.getElementById("name").innerText = "Hi, "+userName || "Unknown User";

=======


const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('userName');
const userEmail = urlParams.get('userEmail');
const userPhoto = urlParams.get('userPhoto');

// Update HTML elements with user credentials
document.getElementById("name").innerText = "Hi, "+userName || "Unknown User";

>>>>>>> 66974c3d37e16aebcd924a1cfeaf92c0d94cf397
