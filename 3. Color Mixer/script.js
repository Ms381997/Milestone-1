const inputColor = document.querySelector("#inputColorName");
const firstColorInput = document.querySelector("#color1");
const secondColorInput = document.querySelector("#color2");
const colorBox = document.querySelector("#resultColorBox");
const colorName = document.querySelector("#resultColorName");

inputColor.addEventListener("submit", function(event){
    event.preventDefault();

    const firstColor = firstColorInput.value.toLowerCase();
    const secondColor = secondColorInput.value.toLowerCase();

    let mixedColor;
    switch(firstColor){
        case "red":
    switch(secondColor){
        case "blue":
           // purple hex code #955bff
           mixedColor = "purple";
        break;
        case "yellow":
           // orange hex code #ff5c19
           mixedColor = "orange";
        break;
        default:
            mixedColor = "individual color combination"
    }
    break;
    case "blue":
        switch(secondColor){
            case "red":
                // purple hex code #955bff
                mixedColor = "purple";
                break;
                case "yellow":
                    // green hex code #206000
                    mixedColor = "green";
                    break;
                    default:
        mixedColor = "individual color combination" ;
     }
     break;
     case "yellow":
         switch(secondColor){
             case "red":
                // orange hex code #ff5c19
                 mixedColor = "orange";
                 break;
                 case "blue":
                    // green hex code #206000
                     mixedColor = "green";
                     break;
                     default:
          mixedColor = "individual color combination" ;
      }
      break;
      default:
             mixedColor = "individual color combination" ;
    }

    if(mixedColor =="individual color combination"){
        resultColorBox.style.backgroundColor = "white";
    } else{
        colorBox.style.backgroundColor=mixedColor;
    }
    colorName.textContent = mixedColor;
});
