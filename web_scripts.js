function dark_mode(){
    var bg3 = document.getElementsByClassName("Background3");
    for(var i = bg3.length - 1; i>=0; i=i-1)
    {
        bg3[i].className= "bg3_dark";
    }
}

function light_mode(){
    var dbg3 = document.getElementsByClassName("bg3_dark");
    for(var j = dbg3.length - 1; j >=0; j=j-1)
    {
        dbg3[j].className= "Background3";
    }
}