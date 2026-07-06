// Logout Button
document.getElementById('logoutBtn').addEventListener('click', () => {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert('Logout failed: ' + error.message);
        });
});
