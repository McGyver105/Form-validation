const rabbitButton = document.getElementById("rabbitpic")

rabbitButton.addEventListener("click", (event) => {
    const newPic = document.createElement("img")
    newPic.src = event.target.src
    newPic.width = 50;
    event.target.parentNode.appendChild(newPic)
})