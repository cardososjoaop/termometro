const temperatura = document.querySelector(".input-term")
const h1 = document.querySelector(".info")
const body = document.querySelector("body")

function clickButton() {

    if (temperatura.value >= 34 && temperatura.value <= 36) {
        h1.innerHTML = "Você esta bem! <span>🤩</span>"
        h1.style.borderColor = "lightgreen"
        body.style.background = "linear-gradient(to bottom,rgb(39, 39, 39), lightgreen)"


    }else if(temperatura.value > 36 && temperatura.value <= 40 ){
         h1.innerHTML = "Você esta com febre!! <span>😬</span>"
         h1.style.borderColor = "orange"
         body.style.background = "linear-gradient(to bottom,rgb(39, 39, 39), orange)"
    }

    else if(temperatura.value > 40 ){
         h1.innerHTML = "Você esta com muita febre!!! <span>🥵</span>"
         h1.style.borderColor = "red"
         body.style.background = "linear-gradient(to bottom,rgb(39, 39, 39), red)"
         
    }
    else{
        h1.innerHTML = "Você esta hiportermia! <span>🥶</span>"
        h1.style.borderColor = "lightblue"
        body.style.background = "linear-gradient(to bottom,rgb(39, 39, 39), lightblue)"
   }
    
}