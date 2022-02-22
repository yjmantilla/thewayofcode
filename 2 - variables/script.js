// las variables son como cajas donde guardar cosas, por lo general datos
// las variables se guardan en la "memoria a corto plazo" del computador (RAM)
// no todas las cajas son iguales, se distinguen por su tipo

// Que preguntarnos cuando creamos variables
// 1. como la llamamos? --> la idea es que sean nombres entendibles, los nombres que use arriba son malos
// 2. que tipo de dato guarda?
// 3. con que valor inicia?

// var nombre_variable = valor con el que inicia
// datos puros
var v1 = 5; // numerico
var v2 = "Hello"; // texto
var v3 = true; //booleano

// datos que organizan otros datos
var v4 = [1,2,3,4,5]; // arreglo
var v5 = [1,"hola",true]; // lista, cual es la diferencia con el arreglo? no requiere homogeneidad
var v6 = {nombre:"Yorguin",edad:26,profesion:"estudiante"} // diccionario

// el = es en realidad el operador de asignacion, no es propiamente igualdad
// se puede entender mas como un <-, "asigna/guarda este dato en tal variable"
v1 = v1 + 5 // tendria esto sentido si fuera una igualdad?

