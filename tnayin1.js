document.onkeydown = function (e){
    var kapik1 = document.getElementById('q6').offsetLeft
    var kapikt = document.getElementById('q6').offsetTop

    var bananl1 = document.getElementById('q').offsetLeft
    var banant1 = document.getElementById('q').offsetTop

    var bananl2 = document.getElementById('q1').offsetLeft
    var banant2 = document.getElementById('q1').offsetTop

    var bananl3 = document.getElementById('q2').offsetLeft
    var banant3 = document.getElementById('q2').offsetTop

    var bananl4 = document.getElementById('q3').offsetLeft
    var banant4 = document.getElementById('q3').offsetTop

    var bananl5 = document.getElementById('q4').offsetLeft
    var banant5 = document.getElementById('q4').offsetTop

    var bananl6 = document.getElementById('q5').offsetLeft
    var banant6 = document.getElementById('q5').offsetTop

    if(e.keyCode == 38){
        kapikt = kapikt - 10
        document.getElementById("q6").style.top = kapikt + "px"
    }

    if(e.keyCode == 40){
        kapikt = kapikt + 10
        document.getElementById("q6").style.top = kapikt + "px"
    }

    if(e.keyCode == 37){
        kapik1 = kapik1 - 10
        document.getElementById("q6").style.left = kapik1 + "px"
    }

    if(e.keyCode == 39){
        kapik1 = kapik1 + 10
        document.getElementById("q6").style.left = kapik1 + "px"
    }

    if(kapik1 + 100>bananl1 && kapik1 < bananl1 + 100 && kapikt + 100 > banant1 && kapikt < banant1 + 100){
        document.getElementById("q").classList.add("rr")
    }

    if(kapik1 + 100>bananl2 && kapik1 < bananl2 + 100 && kapikt + 100 > banant2 && kapikt < banant2 + 100){
        document.getElementById("q1").classList.add("rr")
    }

    if(kapik1 + 100>bananl3 && kapik1 < bananl3 + 100 && kapikt + 100 > banant3 && kapikt < banant3 + 100){
        document.getElementById("q2").classList.add("rr")
    }

    if(kapik1 + 100>bananl4 && kapik1 < bananl4 + 100 && kapikt + 100 > banant4 && kapikt < banant4 + 100){
        document.getElementById("q3").classList.add("rr")
    }

    if(kapik1 + 100>bananl5 && kapik1 < bananl5 + 100 && kapikt + 100 > banant5 && kapikt < banant5 + 100){
        document.getElementById("q4").classList.add("rr")
    }

    if(kapik1 + 100>bananl6 && kapik1 < bananl6 + 100 && kapikt + 100 > banant6 && kapikt < banant6 + 100){
        document.getElementById("q5").classList.add("rr")
    }

    var cl = document.getElementsByClassName("rr").length * 5
    document.getElementById("a1").innerHTML = cl
    if(cl == 30){
        document.getElementById("q8").style.opacity = 1;
        clearInterval(stop);
    }
}
var u = 60
    var stop = setInterval(function stopF(){
        u--
        document.getElementById("a2").innerHTML = u
        if(u == 0){
            document.getElementById("q7").style.opacity = 1;
            clearInterval(stop);
        }
    }, 1000)