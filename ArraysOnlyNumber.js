/*------------------------------Ejercicios------------------------------------ */

/* Dado un array Debes devolver el entero que no se repita   */ 

arr = [1,3,5,3,1]
countNumber = {}


/*  Forma 1 clásica  - Condicional y For  */ 

for(number of arr){
    if(countNumber[number] == undefined){
        countNumber = 1
    } else {
        countNumber[number] + 1
    }
}

/* 1- Con operador Ternario */ 

for(number of arr){
countNumber[number] == undefined
 ?  1 : countNumber + 1 }


/* 1- Con operador Or || */ 

for(number of arr){
    countNumber[number] = countNumber[number] = countNumber[number] + 1 || 1 ;
}

// 1- Función Completa -->


function OnlyNumber(arr){
    arr = [7,4,3,88,4,88,3]
    countNumber = {}
    for(number of arr){
     countNumber[number] = countNumber[number] + 1  || 1
    }
    for (numberkey in countNumber){
        if(countNumber[numberkey] == 1){
            return [numberkey]
        }
    }


}


// console.log(OnlyNumber())



/* Forma 2 con Set -basado en conjuntos */ 

function OnlyNumberSet (arr) {
    countSet = new Set()
    for(number of arr){
    if(countSet.has(number)){
        countSet.delete(number)
    }
      else {
        countSet.add(number)
    }    
  }
return Array.from(countSet)
}


// console.log(OnlyNumberSet([1,3,5,3,1]))



/* Forma 3- con Xor  ^ y  aplicando propiedad distributiva */ 

function OnlyNumberXor(arr){
    let result = 0;
    for(num of arr){
      result = result ^ num
    }
    return result 
}


// console.log(OnlyNumberXor( [7,4,3,88,4,88,3]))