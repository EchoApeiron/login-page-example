document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('login-button'); 

    button.addEventListener('click', () => {
        let username = document.getElementById('input__username').value;
        let password = document.getElementById('input__password').value; 
        alert(`Username: ${username}\nPassword: ${password}`);
        button.blur(); 
    });
});