const usernameRegex = /^[A-z]+[0-9]+[!@£#$%^&*()\-_=+]+$|^[A-z]+[!@£#$%^&*()\-_=+]+[0-9]+/
const namesRegex = /^[A-z\s"!]+$/

const usernameInput = document.querySelector("#username-input");
const firstNameInput = document.querySelector("#firstname-input");
const lastNameInput = document.querySelector("#lastname-input");
const dateOfBirth = document.querySelector("#dateofbirth-input");

usernameInput.addEventListener("blur", (event) => {
    const error = document.querySelector(".errorMessage")
    if (error !== null) error.remove()
    checkValidity(event, usernameRegex);
});

firstNameInput.addEventListener("blur", (event) => {
    const error = document.querySelector(".errorMessage")
    if (error !== null) error.remove()
    checkValidity(event, namesRegex);
})

lastNameInput.addEventListener("blur", (event) => {
    const error = document.querySelector(".errorMessage")
    if (error !== null) error.remove()
    checkValidity(event, namesRegex);
})

dateOfBirth.addEventListener("blur", (event) => {
    const error = document.querySelector(".errorMessage")
    if (error !== null) error.remove()
    checkDateOfBirth(event)
})

const checkValidity = (event, regex) => {
    if (!regex.test(event.target.value)) {
        const errorMessage = document.createElement("p")
        errorMessage.classList.add("errorMessage")
        errorMessage.innerText = "invalid input. See instructions above"
        event.target.parentNode.appendChild(errorMessage)
        event.target.classList.add("invalid")
        event.target.classList.remove("valid")
    }
    else {
        console.log('passed')
        event.target.classList.add("valid")
        event.target.classList.remove("invalid")
    };
};

const checkDateOfBirth = (event) => {
    const inputDate = new Date(event.target.value).getTime();
    const currentDate = new Date().getTime();
    console.log(currentDate - inputDate)
    if (currentDate - inputDate < 568024668000) {
        const errorMessage = document.createElement("p")
        errorMessage.classList.add("errorMessage")
        errorMessage.innerText = "site content only suitable for adults"
        event.target.parentNode.appendChild(errorMessage)
        event.target.classList.add("invalid")
        event.target.classList.remove("valid")
    }
    else {
        console.log('passed')
        event.target.classList.add("valid")
        event.target.classList.remove("invalid")
    }
}