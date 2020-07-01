function openmenuc(){
    var x = document.getElementById("navagation-c");

    if(x.className === "navagation-c") {
        x.className += " menu-js";
    } else{
         x.className = "navagation-c";
         }


}

function openmenu(){
    var x = document.getElementById("navagation");

    if(x.className === "navagation") {
        x.className += " menu-js";
    } else{
         x.className = "navagation";
         }


}
