function suma(a: number, b: string): string 
{
    return a + b;
};
function suma6(a: string, b: string): string{
    return a + b;
};
function suma5(a: string, b: number): string
{
    return a + b;
};
function suma2(a: number, b: number): number {
    return a + b;
}

let resultado = suma2(2, 2) //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado
let resultado3 = suma5("2", 2)
let resultado4 = suma6("2", "2")
let resultado10 = suma(2, "2")



//Aplicar lo mismo para el resto de las operaciones matematicas!