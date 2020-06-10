var ranNum1=Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + ranNum1 + ".png");
var ranNum2=Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + ranNum2 + ".png");
if(ranNum1>ranNum2){
  document.querySelector("h1").innerHTML="Player 1st wins.";
}
else if (ranNum1<ranNum2){
  document.querySelector("h1").innerHTML="Player 2nd wins!";
}
else if (ranNum1===ranNum2){
  document.querySelector("h1").innerHTML="Draw,try for super over!";
}
else{
  document.querySelector("h1").innerHTML="Referesh Browser"
}
