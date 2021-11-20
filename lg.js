var l = document.getElementsByClassName("btn").length;
for (var i = 0; i < l; i++) 
{
    document.getElementsByClassName("btn")[i].addEventListener("click", function () 
    {
        playsound(this.innerHTML);
        animation(this.innerHTML);
    });
}
document.addEventListener("keypress",function(event)
{
    var s=event.key;
    playsound(s.toUpperCase());
    animation(s.toUpperCase());
});
function playsound(key)
{
    var bo;
        switch (key) 
        {
            case "A":
                bo = new Audio("crash.mp3");
                break;
            case "B":
                bo = new Audio("kick-bass.mp3");
                break;
            case "C":
                bo = new Audio("snare.mp3");
                break;
            case "D":
                bo = new Audio("tom-1.mp3");
                break;
            case "E":
                bo = new Audio("tom-2.mp3");
                break;
            case "F":
                bo = new Audio("tom-3.mp3");
                break;
            case 'G':
                bo = new Audio("tom-4.mp3");
                break;
            case 'H':
                bo = new Audio("oo.mp3");
                break;
            case 'I':
                bo = new Audio("pp.mp3");
                break;
            case 'J':
                bo = new Audio("dd.mp3");
                break;
            case 'K':
                bo = new Audio("hh.mp3");
                break;
            case 'L':
                bo = new Audio("hh.mp3");
                break;
            case "M":
                bo = new Audio("crash.mp3");
                break;
            case "N":
                bo = new Audio("kick-bass.mp3");
                break;
            case "O":
                bo = new Audio("snare.mp3");
                break;
            case "P":
                bo = new Audio("tom-1.mp3");
                break;
            case "Q":
                bo = new Audio("tom-2.mp3");
                break;
            case "R":
                bo = new Audio("tom-3.mp3");
                break;
            case 'S':
                bo = new Audio("tom-4.mp3");
                break;
            case 'T':
                bo = new Audio("oo.mp3");
                break;
            case 'U':
                bo = new Audio("pp.mp3");
                break;
            case 'V':
                bo = new Audio("dd.mp3");
                break;
            case 'W':
                bo = new Audio("hh.mp3");
                break;
            case 'X':
                bo = new Audio("hh.mp3");
                break;
            case "Y":
                bo = new Audio("tom-2.mp3");
                break;
            case "Z":
                bo = new Audio("tom-3.mp3");
                break;

        }
        bo.play();
}
function animation(val)
{
   var bt=document.querySelector("."+val);
   bt.classList.add("pressed");
   setTimeout(function(){bt.classList.remove("pressed")},500);
}