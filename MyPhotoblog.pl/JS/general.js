const bg = document.querySelector(".header")

const img = document.querySelector("#bg")

window.addEventListener("mousemove", function(e){
    

    let x = `calc(50% + ${e.clientX / 90}px)`
    let y = `calc(80% + ${e.clientY / 90}px)`

    bg.style.backgroundPositionX = x
    bg.style.backgroundPositionY = y
})