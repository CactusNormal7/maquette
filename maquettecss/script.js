let nextbutton = document.getElementById("butnext")
let logo = document.getElementById("logo")
let facebus = document.getElementById("logoface")
let facevelo = document.getElementById("facevelo")
let indent = 0
let maxindent = 2
let profil = document.getElementById("buttonprofil")
let wrap = document.getElementById("wrap")

nextbutton.onclick = () => {
    if (indent >= maxindent) {
        indent = -1
    }
    indent += 1
    test()
    console.log(indent)
}


function test () {
    if (indent === 1) {
        facebus.style.visibility = "visible"
        facevelo.style.visibility = "hidden"
    }else if (indent == 2) {
        facevelo.style.visibility = "visible"
        facebus.style.visibility = "hidden"
    }else {
        facevelo.style.visibility = "hidden"
        facebus.style.visibility = "hidden"
    }
}


profil.onclick = () => {
    togglemenu()
}


function togglemenu() {
    console.log("oui")
    wrap.classList.toggle("toggle")
}