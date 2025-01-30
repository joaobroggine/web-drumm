document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", handleSound)
})

function handleSound() {
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()

}