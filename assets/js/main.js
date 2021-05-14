//Déclaration des chiffres
var btnDoubleZero = document.getElementById("doubleZero");
var btnZero = document.getElementById("zero");
var btnOne = document.getElementById("one");
var btnTwo = document.getElementById("two");
var btnThree = document.getElementById("three");
var btnFourth = document.getElementById("fourth");
var btnFive = document.getElementById("five");
var btnSix = document.getElementById("six");
var btnSeven = document.getElementById("seven");
var btnEight = document.getElementById("eight");
var btnNine = document.getElementById("nine");

var btnPoint = document.getElementById("point");

//Déclaration des opérateurs
var btnPlus = document.getElementById("plus");
var btnMinus = document.getElementById("minus");
var btnMultiply = document.getElementById("multiply");
var btnDivide = document.getElementById("divide");
var btnModulo = document.getElementById("modulo");

//Déclaration des bouton de fonction
var btnEqual = document.getElementById("equal");
var btnRemove = document.getElementById("remove");
var btnReset = document.getElementById("resetAll");

//Déclaration champ
var results = document.getElementById("results");
var stock = document.getElementById("stock");

//REGEX
const regexChar = /[\+\-\/\*\%]/m;
var resetTest = false;
var stockReset = "";

//DECLARATION DES FONCTIONS POUR LES CHIFFRES
const doubleZero = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "0";
        }else{
            results.innerHTML += "00";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "0";
        }else{
            results.innerHTML += "00";
        } 
    } 
}
const zero = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "0";
        }else{
            results.innerHTML += "0";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "0";
        }else{
            results.innerHTML += "0";
        } 
    } 
}
const one = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "1";
        }else{
            results.innerHTML += "1";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "1";
        }else{
            results.innerHTML += "1";
        } 
    } 
}
const two = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "2";
        }else{
            results.innerHTML += "2";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "2";
        }else{
            results.innerHTML += "2";
        } 
    } 
}
const three = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "3";
        }else{
            results.innerHTML += "3";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "3";
        }else{
            results.innerHTML += "3";
        } 
    } 
}
const four = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "4";
        }else{
            results.innerHTML += "4";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "4";
        }else{
            results.innerHTML += "4";
        } 
    }  
}
const five = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "5";
        }else{
            results.innerHTML += "5";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "5";
        }else{
            results.innerHTML += "5";
        } 
    }  
}
const six = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "6";
        }else{
            results.innerHTML += "6";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "6";
        }else{
            results.innerHTML += "6";
        } 
    } 
}
const seven = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "7";
        }else{
            results.innerHTML += "7";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "7";
        }else{
            results.innerHTML += "7";
        } 
    } 
}
const eight = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "8";
        }else{
            results.innerHTML += "8";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "8";
        }else{
            results.innerHTML += "8";
        } 
    } 
}
const nine = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        if(results.innerHTML == "0"){
            results.innerHTML = "9";
        }else{
            results.innerHTML += "9";
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "9";
        }else{
            results.innerHTML += "9";
        } 
    } 
}

//FONCTIONS POUR LES OPERATEURS
const plus = () =>{
    let op = "+";
    if (resetTest == true){
        stock.innerHTML = stockReset;
        resetTest = false;
    }
    if(stock.innerHTML == "" || results.innerHTML == 0){
        if(results.innerHTML != "0"){
            let add = results.innerHTML + op;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }
    }else{
        let stockage = stock.innerHTML;
        let add = stockage + results.innerHTML + op;
        results.innerHTML = "0";
        stock.innerHTML = add;
    }
}
const minus = () =>{
    let op = "-";
    if (resetTest == true){
        stock.innerHTML = stockReset;
        resetTest = false;
    }
    if(stock.innerHTML == "" || results.innerHTML == "0"){
        if(results.innerHTML != "0"){
            let add = results.innerHTML + op;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }
    }else{
        let stockage = stock.innerHTML;
        let add = stockage + results.innerHTML + op;
        results.innerHTML = "0";
        stock.innerHTML = add;
    }
}
const multiply = () =>{
    let op = "*";
    if (resetTest == true){
        stock.innerHTML = stockReset;
        resetTest = false;
    }
    if(stock.innerHTML == "" || results.innerHTML == "0"){
        if(results.innerHTML != "0"){
            let add = results.innerHTML + op;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }
    }else{
        let stockage = stock.innerHTML;
        let add = stockage + results.innerHTML + op;
        results.innerHTML = "0";
        stock.innerHTML = add;
    }
}
const divide = () =>{
    let op = "/";
    if (resetTest == true){
        stock.innerHTML = stockReset;
        resetTest = false;
    }
    if(stock.innerHTML == "" || results.innerHTML == "0"){
        if(results.innerHTML != "0"){
            let add = results.innerHTML + op;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }
    }else{
        let stockage = stock.innerHTML;
        let add = stockage + results.innerHTML + op;
        results.innerHTML = "0";
        stock.innerHTML = add;
    }
}
const modulo = () =>{
    let op = "%";
    if (resetTest == true){
        stock.innerHTML = stockReset;
        resetTest = false;
    }
    if(stock.innerHTML == "" || results.innerHTML == "0"){
        if(results.innerHTML != "0"){
            let add = results.innerHTML + op;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }
    }else{
        let stockage = stock.innerHTML;
        let add = stockage + results.innerHTML + op;
        results.innerHTML = "0";
        stock.innerHTML = add;
    }
}

//FONCTIONS POUR LES UTILITAIRES
const equal =()=>{
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1); 
    let testChar = regexChar.test(lastC);
    if(results.innerHTML != "0" && stock.innerHTML != ""){
        if(testChar){
            let add = stock.innerHTML + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML = add;
            var resultat = eval(stock.innerHTML);
            
            stock.innerHTML += " = " + resultat;
        }else{
            let resultat = eval(stock.innerHTML);
            stock.innerHTML += " = " + resultat;
        }
        stockReset = resultat;
        resetTest = true;
    }
}

const suppr = () => {
    if(results.innerHTML != "0"){
        var newStr = results.innerHTML.substring(0, results.innerHTML.length - 1);
        results.innerHTML = newStr;
        if(results.innerHTML == ""){
            results.innerHTML = "0";
        }
    }else{
        results.innerHTML = "0";
    }
}

const point = () => {
    results.innerHTML += ".";
}

//EVENT LISTENER CLAVIER
addEventListener('keydown', (event) => {
    switch (event.key){
        case "." :
            point();
            break;
        case "0" :
            zero();
            break;
        case "1" : 
            one();
            break;
        case "2" : 
            two();
            break;
        case "3" :
            three();
            break;
        case "4" :
            four();
            break;
        case "5" :
            five();
            break;
        case "6" : 
            six();
            break;
        case "7" : 
            seven();
            break;
        case "8" :
            eight();
            break;
        case "9" :
            nine();
            break;
        case "+" :
            plus();
            break;
        case "-" :
            minus();
            break;
        case "*" :
            multiply();
            break;
        case "/" :
            divide();
            break;
        case "Enter" :
            equal();
            break;
        case "Backspace" :
            suppr();
            break;
    }  
});

//Bouton virgule
btnPoint.addEventListener("click", function(){
    point();
});
//Bouton DOUBLE ZERO
btnDoubleZero.addEventListener("click", function(){
    doubleZero();
});
//Bouton ZERO
btnZero.addEventListener("click", function(){
    zero();
});
//Bouton UN
btnOne.addEventListener("click", function(){
    one();
});
//Bouton DEUX
btnTwo.addEventListener("click", function(){
    two();
});
//Bouton TROIS
btnThree.addEventListener("click", function(){
    three();
});
//Bouton Quatre
btnFourth.addEventListener("click", function(){
    four();
});
//Bouton CINQ
btnFive.addEventListener("click", function(){
    five();
});
//Bouton SIX
btnSix.addEventListener("click", function(){
    six();
});
//Bouton SEPT
btnSeven.addEventListener("click", function(){
    seven();
});
//Bouton EIGHT
btnEight.addEventListener("click", function(){
    eight();
});
//Bouton NEUF
btnNine.addEventListener("click", function(){
    nine();
});

//*********OPERATEURS************
//PLUS
btnPlus.addEventListener("click", function(){
    plus();
});
//MOINS
btnMinus.addEventListener("click", function(){
    minus();
});
//MULTIPLE
btnMultiply.addEventListener("click", function(){
    multiply();
});
//DIVISER
btnDivide.addEventListener("click", function(){
    divide();
});
//EGALE
btnEqual.addEventListener("click", function(){
    equal();
});
//MODULO
btnModulo.addEventListener("click", function(){
    modulo();
});

//*********AUTRES************
//SUPPRIMER
btnRemove.addEventListener("click", function(){
    suppr();
});
//RESET ALL
btnReset.addEventListener("click", function(){
        results.innerHTML = "0";
        stock.innerHTML = "";
        stockReset = 0;
        resetTest = false;
});

