import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    

    const firebaseConfig = {
      apiKey: "AIzaSyBAyJw-EzvrH4O1Il43sA-ceJoCkUxvUUE",
      authDomain: "financeapp-29fd7.firebaseapp.com",
      databaseURL: "https://financeapp-29fd7-default-rtdb.firebaseio.com",
      projectId: "financeapp-29fd7",
      storageBucket: "financeapp-29fd7.appspot.com",
      messagingSenderId: "36688183901",
      appId: "1:36688183901:web:9a11959af52cf8911403b4"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app); 
    const provider = new GoogleAuthProvider(app);
    const auth = getAuth(app);



    //User credentials
    var userName;
    var userEmail;
    var userPhoto;
const login = document.getElementById("login");
login.addEventListener("click",(e)=>{
    e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        // Store user credentials in sessionStorage
        sessionStorage.setItem('userName', username);
        sessionStorage.setItem('userEmail', email);
        
        const dt = new Date();
        update(ref(database, 'users/' +user.uid),{
            last_login : dt,
        });
        window.location.href = `homepage.html`; // Redirect to homepage without passing user data through URL
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage); 
    });
});

const google_signin = document.getElementById("google-login");
google_signin.addEventListener("click",(e)=>{
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        // Store user credentials in sessionStorage
        sessionStorage.setItem('userName', user.displayName);
        sessionStorage.setItem('userEmail', user.email);
        sessionStorage.setItem('userPhoto', user.photoURL);

        window.location.href = `homepage.html`; // Redirect to homepage without passing user data through URL
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
});
