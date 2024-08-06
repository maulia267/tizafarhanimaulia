document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Contoh validasi sederhana
            if (email === '' || password === '') {
                alert('Email dan password harus diisi.');
            } else {
                alert('Login berhasil!');
                // Lakukan pengalihan ke halaman profil
                window.location.href = 'ProfilTizaFarhaniMaulia.html';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullname = document.getElementById('fullname').value;
            const nickname = document.getElementById('nickname').value;
            const birthplace = document.getElementById('birthplace').value;
            const birthdate = document.getElementById('birthdate').value;
            const domicile = document.getElementById('domicile').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Contoh validasi sederhana
            if (fullname === '' || nickname === '' || birthplace === '' || birthdate === '' || domicile === '' || email === '' || password === '') {
                alert('Semua kolom harus diisi.');
            } else {
                alert('Registrasi berhasil!');
                // Lakukan pengalihan ke halaman login
                window.location.href = 'login.html';
            }
        });
    }
});