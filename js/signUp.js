import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

    const signUp = document.getElementById("signUp");
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
    const auth = getAuth();
    signUp.addEventListener("click",(e)=>{
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var username = document.getElementById("username").value;
        createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    set(ref(database, 'users/' +user.uid),{
        username: username,
        email: email
    });
    window.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage); 
    // ..
  });

    });
    
    

    