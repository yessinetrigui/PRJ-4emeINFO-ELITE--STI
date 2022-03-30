function clickMEDIA(){
    document.getElementById("SOM").style.animation = "cliked .3s ease-in-out";
    document.getElementById("SOME").style.transform = "translateY(100px)";
    document.getElementById("SOME").style.transitionDuration = "1.3s";
    document.getElementById("SOME").style.opacity = "1";
    setTimeout(()=> {
        document.getElementById("SOME").style.transform = "translateY(0px)";
        document.getElementById("SOME").style.transitionDuration = "2s";
        document.getElementById("SOME").style.opacity = "0";
    }, 5000)

};


function verif(){
    return false;
}