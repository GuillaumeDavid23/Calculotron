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
const number = (x) =>{
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        results.innerHTML = results.innerHTML == "0" ? x : results.innerHTML + x; 
    }else{
        results.innerHTML = results.innerHTML == "0" ?  x : results.innerHTML + x;
    } 
}
//DOUBLE ZERO
const doubleZero = () => {
    if(resetTest == true){
        resetTest = false;
        stock.innerHTML = "";
        results.innerHTML = results.innerHTML == "0" ? "0" : results.innerHTML + "00";
    }else{
        results.innerHTML = results.innerHTML == "0" ? "0" : results.innerHTML + "00";
    } 
}
//FONCTIONS POUR LES OPERATEURS
const operateur = (op) => {
    let str = stock.innerHTML;
    let lastC = str.charAt(str.length-1);
    stock.innerHTML = resetTest ? stockReset + op : stock.innerHTML;
    resetTest = resetTest ? false : false;
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
//FONCTION PLUS
const plus = () =>{
    operateur("+");
}
//FONCTION MOINS
const minus = () =>{
    operateur("-")
}
//FONCTION MULTIPLIER
const multiply = () =>{
    operateur("*")
}
//FONCTION DIVISER
const divide = () =>{
    operateur("/");
}
//FONCTION MODULO
const modulo = () =>{
    operateur("%");
}

//FONCTION PARENTHESES
const parenth = () => {
    stock.innerHTML = resetTest ? stockReset + "*" : stock.innerHTML;
    resetTest = resetTest ? false : false;
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
//FONCTION EGALITE
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
addEventListener('keydown', (e) => {
    switch (e.key){
        case "." :
            point();
            break;
        case "0" :
            number("0");
            break;
        case "1" : 
            number("1");
            break;
        case "2" : 
            number("2");
            break;
        case "3" :
            number("3");
            break;
        case "4" :
            number("4");
            break;
        case "5" :
            number("5");
            break;
        case "6" : 
            number("6");
            break;
        case "7" : 
            number("7");
            break;
        case "8" :
            number("8");
            break;
        case "9" :
            number("9");
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
//EVENT LISTENER CLICK
addEventListener("click", function(e){
    let targetEl = e.target.dataset.value;
    switch (targetEl){
        case "resetAll" : 
            reset();
            break;
        case "modulo" : 
            modulo();
            break;
        case "parenth" : 
            parenth();
            break;
        case "remove" : 
            suppr();
            break;
        case "square" : 
            square();
            break;
        case "root" : 
            root();
            break;
        case "posNeg" : 
            posNeg();
            break;
        case "divide" : 
            divide();
            break;
        case "7" : 
            number("7");
            break;
        case "8" : 
            number("8");
            break;
        case "9" : 
            number("9");
            break;
        case "multiply" : 
            multiply();
            break;
        case "4" : 
            number("4");
            break;
        case "5" : 
            number("5");
            break;
        case "6" : 
            number("6");
            break;
        case "minus" : 
            minus();
            break;
        case "1" : 
            number("1");
            break;
        case "2" : 
            number("2");
            break;
        case "3" : 
            number("3");
            break;
        case "plus" : 
            plus();
            break;
        case "00" : 
            doubleZero();
            break;
        case "0" : 
            number("0");
            break;
        case "point" : 
            point();
            break;
        case "equal" : 
            equal();
            break;
    }
});
//718 lignes ==> 667 lignes ("data") ==> 465 ("fonction opérateur") ==> 373 ("Ajout fonction nombres")