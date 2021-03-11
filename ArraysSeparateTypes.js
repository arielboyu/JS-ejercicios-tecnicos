/*------------------------------Ejercicios------------------------------------ */

/* Dado el siguiente input  ["a",1,2,false,"b"] deberas devolver un output con
en forma de objeto donde la key sea igual al tipo de dato y el valor a sus respectivos valores   */

/*  
 output esperado :   
{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}  
 */ 


// Forma 1 utilizamos el  Set para devolver un arreglo con los typos de datos 
// Luego mapeamos y guardamos los valores clasificando segun su tipo 


function separateTypes(input) {
    let keys = [...new Set(input.map(e => typeof e))]
    let output = {}
    keys.map(ele => {
      output[ele] = input.filter(e => ele === typeof e)
    })
    return output
  }


//   console.log(separateTypes(["a",1,2,false,"b"]))




  //Forma 2  Utilizando el for
  function separateTypes(input) {
    let output = {}
    for (a of input){
       output[typeof(a)] ?  output[typeof(a)].push(a): output[typeof(a)]= [a]
    }
  return output
  }

  console.log(separateTypes(["a",1,2,false,"b"]))

