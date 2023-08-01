//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<T, K extends keyof T>(arreglo: T[], prop: K[]): T[K][] {
    return arreglo.map((object) => {
      return object[prop];
    });
  }


  interface Person {
    name: string;
    age: number;
  }
  
  const people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 40 },
  ];
  
  const names: string[] = pluck(people, ["name"]); // ["Alice", "Bob", "Charlie"]
  const ages: number[] = pluck(people, ["age"]); // [30, 25, 40]