window.onload=function(){

scorej1 = 0
scorej2 = 0

scorej1s1 = 0
scorej2s1 = 0

scorej1s2 = 0
scorej2s2 = 0

scorej1s3 = 0
scorej2s3 = 0

window.J1 = window.prompt("Quel est le nom du joueur 1 ?")
window.J2 = window.prompt("Quel est le nom du joueur 2 ?")

document.getElementById("J1").innerHTML = J1
document.getElementById("J2").innerHTML = J2

let serveurInit = Math.random()

if(serveurInit <= 0.5)
{document.getElementById("ServJ1").innerHTML = "x"}
if(serveurInit > 0.5)
{document.getElementById("ServJ2").innerHTML = "x"}

document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
}

function ajoutpointj1(){

    {document.getElementById("ServJ1").innerHTML = "x"}
    {document.getElementById("ServJ2").innerHTML = ""}

    if(scorej1s1 == 21 && scorej1s1 - scorej2s2 >= 2 || scorej1 + scorej2 > 0){
        if(scorej1s2 == 21 && scorej1s2 - scorej2s2 >= 2  || scorej1 + scorej2 == 2 ){scorej1s3++}
        else {scorej1s2++}}
    else {scorej1s1++}

    if (scorej1s1 === 21 && scorej1s1 - scorej2s1 > 2 && scorej1s2 === 0 && scorej2s2 === 0){
        scorej1++
        document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
    }

    if (scorej1s2 === 21 && scorej1s2 - scorej2s2 > 2 && scorej1s3 === 0 && scorej2s3 === 0){
        scorej1++
        document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
    }

    if (scorej1s3 === 21 && scorej1s3 - scorej2s3 > 2){
        scorej1++
        document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
        alert("Victoire de "+ J1 + " !")
    }



    document.getElementById("scorej1s1").innerHTML=scorej1s1
    document.getElementById("scorej1s2").innerHTML=scorej1s2
    document.getElementById("scorej1s3").innerHTML=scorej1s3

}

function ajoutpointj2(){

    if(scorej2s1 == 21 || scorej1 + scorej2 > 0){
        if(scorej2s2 == 21 || scorej1 + scorej2 == 2){
    scorej2s3++}
    else {scorej2s2++}
    }
    else {scorej2s1++}

    {document.getElementById("ServJ2").innerHTML = "x"}
    {document.getElementById("ServJ1").innerHTML = ""}

    if (scorej2s1 === 21 && scorej2s1 - scorej1s1 > 2 && scorej1s2 === 0 && scorej2s2 === 0){
        scorej2++
        document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
    }

    if (scorej2s2 === 21 && scorej2s2 - scorej1s2 > 2 && scorej1s3 === 0 && scorej2s3 === 0){
        scorej2++
        document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
    }

    if (scorej2s3 === 21 && scorej2s3 - scorej1s3 > 2){
        scorej2++
        document.getElementById("Score").innerHTML = scorej1 + " - " + scorej2
        alert("Victoire de "+ J2 + " !")
    }

    
    document.getElementById("scorej2s1").innerHTML=scorej2s1
    document.getElementById("scorej2s2").innerHTML=scorej2s2
    document.getElementById("scorej2s3").innerHTML=scorej2s3
}