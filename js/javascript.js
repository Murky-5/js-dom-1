let bulbSwitch = document.getElementById("switch")
const bulb_vis = document.querySelector("bulb")
const bulb_none_vis = document.querySelector("bulb_none")

bulbSwitch.addEventListener('click', function() {
    if (bulbSwitch === "btn_none") {
        bulbSwitch.innerHTML("Spegni")
        bulbSwitch.classList.toggle("btn_on")
        bulb_vis.classList.toggle("bulb_none")
        bulb_none_vis.classList.toggle("bulb")
    } else {
        bulbSwitch.innerHTML("Accendi")
        bulbSwitch.classList.toggle("btn_on")
        bulb_vis.classList.toggle("bulb")
        bulb_none_vis.classList.toggle("bulb_none")
    }
})