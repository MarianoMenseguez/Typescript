//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?

interface Persona {
    nombre: string;
    edad: number
}

let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo: boolean
}

let diego: Estudiante = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?........ se rompe el codigo!!!
}

// Investiga la palabra reservada implements
// En TypeScript, la palabra clave "implements" se utiliza para establecer que una clase implementa una o varias interfaces. 
// Una interfaz en TypeScript es una estructura que define un conjunto de propiedades y métodos que una clase debe implementar.


// Existe otra alternativa para realizar lo mismo?
// Si, types.


type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias

export {}