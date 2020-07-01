function openmenuc(){
    var x = document.getElementById("navagation-c");

    if(x.className === "navagation-c") {
        x.className += " menu-js";
        document.getElementById("menu-icon").innerHTML = "&Cross;";
    } else{
         x.className = "navagation-c";
         document.getElementById("menu-icon").innerHTML = "&#9776;";
         }


}

function openmenu(){
    var x = document.getElementById("navagation");

    if(x.className === "navagation") {
        x.className += " menu-js";
        document.getElementById("menu-icon").innerHTML = "&Cross;";
    } else{
         x.className = "navagation";
         document.getElementById("menu-icon").innerHTML = "&#9776;";
         }


}
