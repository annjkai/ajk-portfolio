
const contactName = document.getElementById("name-field")
const contactEmail = document.getElementById("email-field")
const contactMessage = document.getElementById("message-field")

const newMessage = []

const closeModal = document.getElementsByClassName("close-modal")[0]

document.getElementById("contact-button").addEventListener("click", function (event) {
    event.preventDefault()
    modal.style.display = "flex"
  })

document.getElementById("submit-button").addEventListener("click", function(e) {
    alert(
        `Thank you, I'll be in touch soon!
        Name: ${contactName.value}
        Email: ${contactEmail.value}
        Message:
        ${contactMessage.value}
        `
    )
    //console.log(contactName.value)
    //console.log(contactEmail.value)
    //console.log(contactMessage.value)
    e.preventDefault()
    modal.style.display = "none"
    storeContactData()
})

storeContactData = () => {
    newMessage.push(contactName.value, contactEmail.value, contactMessage.value)
    console.log("New message: " + newMessage)
}

closeModal.onclick = function() {
    modal.style.display = "none"
}

//ironannebonnie@gmail.com