import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwdJ-74751GBF6zf34C8QQJNWNadoCZ1Q",
    authDomain: "witkomar-915bc.firebaseapp.com",
    projectId: "witkomar-915bc",
    storageBucket: "witkomar-915bc.firebasestorage.app",
    messagingSenderId: "230769314572",
    appId: "1:230769314572:web:12579005c068bac5541729",
    // measurementId: "G-GF318XH5BY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new firebase.auth.GoogleAuthProvider();
const loginButton = document.getElementById("login-btn");
const logoutButton = document.getElementById("logout-btn");
const content = document.getElementById("content");
const loginSection = document.getElementById("login-section");
const analytics = getAnalytics(app);

loginButton.addEventListener("click", () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        saveUserEmail(user.email);
        updateUI(user);
    }).catch((error) => {
        console.error("Login Failed:", error);
    });
});

logoutButton.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
        updateUI(null);
    });
});

function updateUI(user) {
    if (user) {
        loginSection.style.display = "none";
        content.style.display = "block";
    } else {
        loginSection.style.display = "block";
        content.style.display = "none";
    }
}

function saveUserEmail(email) {
    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })
        .then(response => response.json())
        .then(data => console.log("Email saved:", data))
        .catch(error => console.error("Error saving email:", error));
}

firebase.auth().onAuthStateChanged((user) => {
    updateUI(user);
});
