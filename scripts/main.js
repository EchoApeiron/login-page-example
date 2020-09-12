document.addEventListener('DOMContentLoaded', () => {
    function onClick() {
        let username = document.getElementById('input__username').value;
        let password = document.getElementById('input__password').value; 
        alert(`Username: ${username}\nPassword: ${password}`);
        button.blur(); 
        document.getElementById('input__username').value = '';
        document.getElementById('input__password').value = ''; 
    }

    let button = document.getElementById('login-button'); 

    button.addEventListener('click', () => {
        onClick();
    });

    button.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            onClick();
        }
    });
});