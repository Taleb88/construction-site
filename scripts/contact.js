function contactForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let textArea = document.getElementById('textArea').value;
    let success = document.getElementById('success');
    let text = '';

    event.preventDefault();

    if (firstName == '') {
        alert('Enter first name');
    } else if (lastName == '') {
        alert('Enter last name');
    } else if (email == '') {
        alert('Please enter a valid email');
    } else if (textArea == '') {
        alert('Please write something')
    } else {
        text = "Thank You!";
        document.getElementById('form').reset();
    }

    success.innerHTML = text;
}