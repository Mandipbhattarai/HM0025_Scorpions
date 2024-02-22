<<<<<<< HEAD
// Extract user credentials from URL parameters
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    
    const firebaseConfig = {
        apiKey: "AIzaSyBAyJw-EzvrH4O1Il43sA-ceJoCkUxvUUE",
        authDomain: "financeapp-29fd7.firebaseapp.com",
        databaseURL: "https://financeapp-29fd7-default-rtdb.firebaseio.com",
        projectId: "financeapp-29fd7",
        storageBucket: "financeapp-29fd7.appspot.com",
        messagingSenderId: "36688183901",
        appId: "1:36688183901:web:9a11959af52cf8911403b4"
      };

    const app = initializeApp(firebaseConfig);


const auth = getAuth();
const signout = document.getElementById("logOut");
signout.addEventListener("click",(e)=>{
    signOut(auth).then(() => {
        window.location.href = "index.html";

      }).catch((error) => {
        alert(error);
      });
      

=======
// Extract user credentials from URL parameters
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    
    const firebaseConfig = {
        apiKey: "AIzaSyBAyJw-EzvrH4O1Il43sA-ceJoCkUxvUUE",
        authDomain: "financeapp-29fd7.firebaseapp.com",
        databaseURL: "https://financeapp-29fd7-default-rtdb.firebaseio.com",
        projectId: "financeapp-29fd7",
        storageBucket: "financeapp-29fd7.appspot.com",
        messagingSenderId: "36688183901",
        appId: "1:36688183901:web:9a11959af52cf8911403b4"
      };

    const app = initializeApp(firebaseConfig);


const auth = getAuth();
const signout = document.getElementById("logOut");
signout.addEventListener("click",(e)=>{
    signOut(auth).then(() => {
        window.location.href = "index.html";

      }).catch((error) => {
        alert(error);
      });
      

>>>>>>> 66974c3d37e16aebcd924a1cfeaf92c0d94cf397
});