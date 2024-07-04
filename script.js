document.addEventListener('DOMContentLoaded', function () {
    const navicon = document.querySelector('.navicon');
    const navbarMenu = document.querySelector('.navbar-menu');
    const mainContainer=document.querySelector('.hero-section');

    navicon.addEventListener('click', function () {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

});
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.classList.add("response-message");
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML ="<p>Your response has been recorded. We will reach you soon.</p>";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong! Try again.";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
                result.classList.remove("response-message");
                result.innerHTML="";
            }, 3000);
        });
});