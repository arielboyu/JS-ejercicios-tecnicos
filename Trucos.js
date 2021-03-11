/*------------------------------Buenas Prácticas JS------------------------------------ */
//============================//
// #1 numeric a string
//============================//

const edad = 23

// const parsedEdad = edad.toString()

const parsedEdad = edad + ""


//  reemplazamos el toString por un simple string vacio y nos parsea el valor.

// console.log('edad es de tipo', typeof edad ,'y vale ', edad)
// console.log('edad es de tipo', typeof parsedEdad, 'y vale ' , parsedEdad)


//============================//
// #2 string a numeric
//============================//

const edadString = '23'

// const parsedEdad =  Number.parseInt(edad)

const parsedEdadString = + edadString


// reemplazamos el Number.parseInt por un  + (valor) y nos convierte a integer.

// console.log('edad es de tipo', typeof edadString ,'y vale ', edadString)
// console.log('edad es de tipo', typeof parsedEdadString, 'y vale ' , parsedEdadString)


//=========================================//
// #3 numeric (float) a numeric(integer)
//========================================//

const tarifa = 7.4

// const parsedTarifa = Math.round(tarifa)

const parsedTarifa = tarifa | 0

// con la expresión: tarifa | 0  obtenemos el mismo redondeo que al usar Math.round  


// console.log('tarifa', tarifa)
// console.log('parsedTarifa', parsedTarifa)


//=========================================//
// #4 Filtrar Valores Únicos en un array 
//========================================//



const edades = [12,12,54,12,23,41,13,12,21,39,12,78,32,33,3]


// const uniqueEdades = edades.filter((value,index,array) => array.indexOf(value) === index)

// const uniqueEdades = Array.from (new Set(edades))

// mas optimizado con spread operator

const uniqueEdades = [...(new Set(edades))]

// console.log(uniqueEdades)



//=========================================//
// #5 Acortar un Array
//========================================//

const frutas  = [
    'manzana',
    'banana',
    'pera',
    'limón',
    'naranja',
    'mango',
    'uva' 
]

// const previewFrutas = frutas.slice(0,3)

frutas.length =  3

// console.log(frutas)



//=========================================//
// #6 Rellenar un Array
//========================================//

let miArray = new Array(30).fill("t")

// for(let i = 0; i < miArray.length; i++){
//     miArray[i] = null
// }

// console.log(miArray)



//=========================================//
// #7 Objetos Dinámicos
//========================================//

const soKey = 'So'

const pc = {
    'marca': 'Lenovo',
    'disco': '1TB',
    'ram': '16',
    [soKey]: 'win10',
}

// console.log(pc)



//=========================================//
// #8 Pasar Objeto a Array
//========================================//


const canal = {
    'name': 'Bitech Studio',
    'subs': '5900',
    'comments': '123423',
}


// console.log(Object.keys(canal),Object.values(canal))


//=========================================//
// #9 Pasar Array a objeto
//========================================//


const carrito = [
 'celular',
 'zapatos',
 'reloj',
 'laptop'
]

const x = {... carrito}

console.log(x)