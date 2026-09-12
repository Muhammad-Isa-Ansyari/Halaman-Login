$(document).ready(function(){
    $('#loginBtn').click(function(){
        let username = $('#username').val();
        let password = $('#password').val();

        if(username === "admin" && password === "1234") {
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard or another page
        } else {
            $('#errorMsg').text('Invalid Username or Password');
        }
    });
});
