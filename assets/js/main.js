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
var btnSquare = document.getElementById("square");
var btnParenth = document.getElementById("parenth");
var btnRoot = document.getElementById("root");

var btnPosNeg = document.getElementById("posNeg");


//Déclaration des bouton de fonction
var btnEqual = document.getElementById("equal");
var btnRemove = document.getElementById("remove");
var btnReset = document.getElementById("resetAll");

//Déclaration champ
var results = document.getElementById("results");
var stock = document.getElementById("stock");

//REGEX
const regexChar = /[\+\-\/\*\%]/m;

//Variable STOCK ET TEST
var resetTest = false;
var parenthTest = false;
var NegTest = false;
var stockReset = "";
var resultat = 0;

//DECLARATION DES FONCTIONS POUR LES CHIFFRES
//DOUBLE ZERO
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
//CHIFFRE ZERO
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
//CHIFFRE UN
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
//CHIFFRE DEUX
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
//CHIFFRE TROIS
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
//CHIFFRE QUATRE
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
//CHIFFRE CINQ
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
//CHIFFRE SIX
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
//CHIFFRE SEPT
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
//CHIFFRE HUIT
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
//CHIFFRE NEUF
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
//FONCTION PLUS
const plus = () =>{
    let op = "+";
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1);
    if (resetTest == true){
        stock.innerHTML = stockReset + op;
        resetTest = false;
    }
    if(lastC == ")"){
        if(results.innerHTML != "0"){
            let add = op + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }else{
            stock.innerHTML += op;
        }
    }else{
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
}
//FONCTION MOINS
const minus = () =>{
    let op = "-";
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1);
    if (resetTest == true){
        stock.innerHTML = stockReset + op;
        resetTest = false;
    }
    if(lastC == ")"){
        if(results.innerHTML != "0"){
            let add = op + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }else{
            stock.innerHTML += op;
        }
    }else{
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
}
//FONCTION MULTIPLIER
const multiply = () =>{
    let op = "*";
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1); 
    if (resetTest == true){
        stock.innerHTML = stockReset + op;
        resetTest = false;
    }
    if(lastC == ")"){
        if(results.innerHTML != "0"){
            let add = op + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }else{
            stock.innerHTML += op;
        }
    }else{
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
}
//FONCTION DIVISER
const divide = () =>{
    let op = "/";
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1);
    if (resetTest == true){
        stock.innerHTML = stockReset + op;
        resetTest = false;
    }
    if(lastC == ")"){
        if(results.innerHTML != "0"){
            let add = op + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }else{
            stock.innerHTML += op;
        }
    }else{
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
}
//FONCTION MODULO
const modulo = () =>{
    let op = "%";
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1);
    if (resetTest == true){
        stock.innerHTML = stockReset + op;
        resetTest = false;
    }
    if(lastC == ")"){
        if(results.innerHTML != "0"){
            let add = op + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML += add;
        }else{
            stock.innerHTML += op;
        }
    }else{
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
}
//FONCTION PARENTHESES
const parenth = () => {
    if (resetTest == true){
        stock.innerHTML = stockReset + "*";
        resetTest = false;
    }
    if(!parenthTest){
        stock.innerHTML += "(";
        parenthTest = true;
    }else{
        stock.innerHTML += results.innerHTML + ")";
        results.innerHTML = "0";
        parenthTest = false;
    }
}
//FONCTION METTRE AUX CARRE
const square = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = stockReset;
        if(stock.innerHTML == "0"){
            stock.innerHTML = "";
        }else{
            stock.innerHTML = Math.pow(stock.innerHTML, 2);
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "0";
        }else{
            results.innerHTML = results.innerHTML.replace('(', '');
            results.innerHTML = results.innerHTML.replace(')', '');
            results.innerHTML = Math.pow(results.innerHTML, 2);
        } 
    } 
}
//FONCTION RACINE CARRE
const root = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = stockReset;
        if(stock.innerHTML == "0"){
            stock.innerHTML = "";
        }else{
            stock.innerHTML = Math.sqrt(stock.innerHTML);
        } 
    }else{
        if(results.innerHTML == "0"){
            results.innerHTML = "0";
        }else{
            results.innerHTML = Math.sqrt(results.innerHTML);
        } 
    } 
}
//FONCTION POSITIF / NEGATIF
const posNeg = () => {
    if(resetTest == true){
        resetTest = false;
        results.innerHTML = stockReset;
        stock.innerHTML = "";
    }
    if(results.innerHTML != "0"){
        if(!NegTest){
            stockReset = results.innerHTML;
            results.innerHTML = "(-" + results.innerHTML + ")";
            NegTest = true;
        }else{
            results.innerHTML = results.innerHTML.replace('-', '');
            results.innerHTML = results.innerHTML.replace('(', '');
            results.innerHTML = results.innerHTML.replace(')', '');
            NegTest = false;
        }
    }
}
//FONCTIONS POUR LES UTILITAIRES
//FONCTION EGAL
const equal =()=>{
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1); 
    let testChar = regexChar.test(lastC);
    if(stock.innerHTML != "" && resetTest == true){
        return 0;
    }
    else if (stock.innerHTML == ""){
        return 0;
    }
    else if (lastC == "%" && results.innerHTML == "0") {
        return 0;
    }
    else if(parenthTest == true){
        stock.innerHTML += results.innerHTML + ")";
        results.innerHTML = "0";
        parenthTest = false;
        resultat = eval(stock.innerHTML);
        stock.innerHTML += " = " + resultat;
        stockReset = resultat;
        resetTest = true;
        return 0;
    }
    else if(results.innerHTML != "0" || stock.innerHTML != ""){
        if(testChar){
            let add = stock.innerHTML + results.innerHTML;
            results.innerHTML = "0";
            stock.innerHTML = add;
            resultat = eval(stock.innerHTML);
            stock.innerHTML += " = " + resultat;
        }else{
            resultat = eval(stock.innerHTML);
            stock.innerHTML += " = " + resultat;
        }
        stockReset = resultat;
        resetTest = true;
    }
}
//FONCTION SUPPRESSION
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
//FONCTION VIRGULES
const point = () => {
    if(results.innerHTML.indexOf(".") == "-1"){
        results.innerHTML += ".";
    } 
}

//FONCTION RESET COMPLET
const reset = () => {
    results.innerHTML = "0";
    stock.innerHTML = "";
    stockReset = 0;
    resetTest = false;
    parenthTest = false;
    NegTest = false;
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
        case "%" :
            modulo();
            break;
        case "²" :
            square();
            break;
        case "(" :
            parenth();
            break;
        case ")" :
            parenth();
            break;
        case "Enter" :
            equal();
            break;
        case "Backspace" :
            suppr();
            break;
        case "Delete" :
            reset();
            break;
    }  
});

//Bouton virgule
btnPoint.addEventListener("click", function(){
    point();
});
//Bouton double ZERO
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
//Bouton carré
btnSquare.addEventListener("click", function(){
    square();
});
btnParenth.addEventListener("click", function(){
    parenth();
});
btnRoot.addEventListener("click", function(){
    root();
});
btnPosNeg.addEventListener("click", function(){
    posNeg();
});
//*********AUTRES************
//SUPPRIMER
btnRemove.addEventListener("click", function(){
    suppr();
});
//RESET ALL
btnReset.addEventListener("click", function(){
    reset();
});