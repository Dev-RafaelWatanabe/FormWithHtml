const Form = document.querySelector("form");
const InName = document.querySelector(".input-name");
const InEmail = document.querySelector(".input-email");
const InPassword = document.querySelector(".input-password");

function register() {
    fetch("https://localhost.8000/register", 
    {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: InName.value,
                email: InEmail.value,
                password: InPassword.value
            })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
            
}

function clear () {
    InName.value ="";
    InEmail.value="";
    InPassword.value="";
}

Form.addEventListener('submit', function(event){
    event.preventDefault();

    register();
    clear();
});