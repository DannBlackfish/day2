console.log("Hola, estoy activado")


// 1. CREAR LA FUNCIÓN - DECLARAR UNA FUNCIÓN

// JAVASCRIPT TRADICIONAL - ES5
// PARENTESIS = PARÁMETROS
function suma (x, y) {
    //... VA TODO EL PROCESO
    console.log("Esta es una instrucción adicional")
    const resultado = x + y

    return resultado
}


// 2. ACTIVAR LA FUNCIÓN - INVOCACIÓN

console.log(suma(3, 4))
console.log(suma(2, 10))
console.log(suma(5430, 3810))


function saludar (language){
    if(language === "spanish") {
        return `Hola Mike`
    } else if (language === "english"){
        return `Hello Mike`
    } else {
        return `🚀`
    }
}

console.log(saludar("turkish"))

const mike = obtenerInfo("Mike", "Nieva", 33)

function obtenerInfo (nombre, apellido, edad) {
    const info = {
        name: nombre,
        lastname: apellido,
        age: edad,
        cellphone: null
    }

    return info
}


const pedro = obtenerInfo("Pedro", "Perez", 36)

console.log(mike)
console.log(pedro)

// SEGUNDA OPCIÓN - FUNCIONES DE EXPRESIÓN

const dividir = function (num1, num2) {
    console.log(arguments)
    return num1 / num2
}

console.log(dividir(5,3))



// FUNCIONES ANÓNIMAS
// - No tienen nombre

function printName(name, anonFunc) {
    anonFunc(name);
  }

  const nombrar = 


  printName('sandra', function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
  } );
  
   // => Sandra

   printName("mike", function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
  })

  function printName(name, anonFunc) {
    anonFunc(name);
  }

  const nombrar =  function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
  } 

    printName('sandra', nombrar);
    printName("mike", nombrar)



const greeting = function (name) {
    return name
  };
  
// arrow function syntax
// ES6+ JS Moderno
const greeting = name => {
    return name;
};

const greeting = name => name
