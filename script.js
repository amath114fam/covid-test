
let sympt = prompt("est ce que tu as de la fievre(oui/non)?")
let sympt2 = prompt("est ce que tu vomit(oui/non)?")
let sympt3 = prompt("est ce que tu as de la diarrhée(oui/non)?")
let sympt4 = prompt("As-tu des maux de tête(oui/non)?")
let sympt5 = prompt("As-tu toux(oui/non)?")

if(sympt==="oui"&& sympt2==="oui" && sympt3==="oui" && sympt4==="oui" && sympt5==="oui"){
    alert("vous êtes à 100% du COVID")
}else if(sympt==="non"&& sympt2==="non" && sympt3==="non" && sympt4==="non" && sympt5==="non"){
    alert("vous n'avez pas le COVID")
}else if((sympt==="oui" && sympt2=="oui" && sympt3==="non" && sympt4==="non" && sympt5==="non")||
(sympt==="non" && sympt2=="oui" && sympt3==="oui" && sympt4==="non" && sympt5==="non")||
(sympt==="non" && sympt2=="non" && sympt3==="non" && sympt4==="oui" && sympt5==="oui")||
(sympt==="non" && sympt2=="oui" && sympt3==="non" && sympt4==="oui" && sympt5==="non")||
(sympt==="non" && sympt2=="non" && sympt3==="oui" && sympt4==="oui" && sympt5==="non")||
(sympt==="oui" && sympt2=="non" && sympt3==="non" && sympt4==="non" && sympt5==="oui")||
(sympt==="oui" && sympt2=="non" && sympt3==="oui" && sympt4==="non" && sympt5==="non")||
(sympt==="non" && sympt2=="non" && sympt3==="oui" && sympt4==="non" && sympt5==="oui")){
    alert("vous êtes à 40% du COVID")
}else if((sympt==="oui" && sympt2=="non" && sympt3==="non" && sympt4==="non" && sympt5==="non")||
(sympt==="non" && sympt2=="oui" && sympt3==="non" && sympt4==="non" && sympt5==="non")||
(sympt==="non" && sympt2=="non" && sympt3==="oui" && sympt4==="non" && sympt5==="non")||
(sympt==="non" && sympt2=="non" && sympt3==="non" && sympt4==="oui" && sympt5==="non")||
(sympt==="non" && sympt2=="non" && sympt3==="non" && sympt4==="non" && sympt5==="oui")){
    alert("vous êtes à 20% du COVID ")
}else if((sympt==="oui" && sympt2=="oui" && sympt3==="oui" && sympt4==="oui" && sympt5==="non")||
(sympt==="oui" && sympt2=="non" && sympt3==="oui" && sympt4==="oui" && sympt5==="oui")||
(sympt==="oui" && sympt2=="oui" && sympt3==="non" && sympt4==="oui" && sympt5==="oui")||
(sympt==="oui" && sympt2=="oui" && sympt3==="oui" && sympt4==="non" && sympt5==="oui")||
(sympt==="non" && sympt2=="oui" && sympt3==="oui" && sympt4==="oui" && sympt5==="oui")){
    alert("vous êtes à 80% du COVID")
}else{
    alert("vous êtes à 60%")
}




