function toggleNav() {
    let navState = document.getElementById("nav-mobile").style.display;
    if (navState == "") {
        document.getElementById("nav-mobile").style.display = "block";
    } 
    else if (navState == "block") {
        document.getElementById("nav-mobile").style.display = "";
    }
}