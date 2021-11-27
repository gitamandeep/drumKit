for(var i =0 ;i< document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll("button")[i].addEventListener("click" , function(){
var instrument = this.innerHTML;
sound(instrument);
animation(instrument);
});
}
document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
}

);
function sound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "a" :
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
                case "s" :
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
        
                case "d" :
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
        
                case "j" :
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
                case "k" :
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                    case "l" :
                        var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
                
        
        default:
            break;
    }
}
function animation(currentKey){
    var animate = document.querySelector("." + currentKey);
    animate.classList.add("pressed");
    setTimeout( function() {animate.classList.remove("pressed");},100);
}

