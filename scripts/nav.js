function toggleNav() {
    let navState = document.getElementById("nav-mobile").style.display;
    if (navState == "") {
        document.getElementById("nav-mobile").style.display = "block"; // show element
    } 
    else if (navState == "block") {
        document.getElementById("nav-mobile").style.display = ""; // hide element
    }
}

function toggleTheme() {
    document.body.classList.toggle('light'); // switch the theme
}