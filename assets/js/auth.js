// firebaseConfig.js — Copy this to your project
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loading = document.createElement('div');
    loading.innerHTML = '<p>Logging in...</p>';
    loading.className = 'loading';
    document.querySelector('.login-card').appendChild(loading);

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            loading.remove();
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            loading.remove();
            alert('Error: ' + error.message);
        });
});

// Signup
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loading = document.createElement('div');
    loading.innerHTML = '<p>Creating account...</p>';
    loading.className = 'loading';
    document.querySelector('.signup-card').appendChild(loading);

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            loading.remove();
            // Add username to Firestore
            const user = userCredential.user;
            return user.updateProfile({
                displayName: username
            });
        })
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            loading.remove();
            alert('Error: ' + error.message);
        });
});
