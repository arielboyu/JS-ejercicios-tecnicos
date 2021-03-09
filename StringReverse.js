/*------------------------------------Ejercicios--------------------------- */

/* 1-Dado un String cree una función reverse que invierta el orden de sus caracteres */
/* No puede usarse Destructuración ni Recursión*/

function Reverse() {
    let myText = "yo dono rosas oro no doy";
  let textReverse = "";
  for (letter of myText) {
    textReverse = letter + textReverse;
  }
  return textReverse;
}



// console.log(Reverse())

/* 2-Cree una función que invierta el orden de sus caracteres,usando destructuración */
/* Aplicamos el Spread operator, y luego utilizamos los metodos para arrays Reverse y Join */

function reverseDest(myText) {
  return [...myText].reverse().join("");
}
// console.log(ReverseDest("Ejemplo"))

/* 3-Cree una función que invierta el orden de sus caracteres recursivamente  */
function reverseRecur(text) {
  if (text === "") {
    return "";
  }
  let subText = text.substring(1);
  return reverseRecur(subText) + text.charAt(0);
}

// console.log(reverseRecur("Ejemplo"))

/* 4-crear función isPalindrome, que dado un string nos indique si es palindrome  */
/*  Ejemplo de palindromes "Yo dono rosas, oro no doy" */

function palindrome(text) {
    var re = /[\W_]/g;
    var lowRegStr = text.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
//   console.log(palindrome("Yo dono rosas oro no doy"))


/* 5-Opcional: Intente invertir las palabras de una frase pero cada palabra de mantenerse en el lugar   */


function reverseTextLast(text){
    myTextArr = text.split(" ")
    frase =  myTextArr.map(word => Reverse(word))
    return frase[0];
}


// console.log(reverseTextLast("hola mundo"))


