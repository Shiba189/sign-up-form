let message = document.getElementById('message')

let check = function () {
    if ( document.getElementById('password').value == document.getElementById('confirm-password').value) {
        message.style.color = 'cyan';
        message.innerHTML = 'Matching';
        document.querySelector('button').disabled = false;
    } else {
        message.style.color = 'rgb(255, 51, 51)'
        message.innerHTML = '*Password not matching';
        document.querySelector('button').disabled = true;
    }
}