(() => {
    const addNumber = (a, b) => a + b;
    const greet = (greeting) => `Hola ${greeting}`;
    const saveTheWorld = () => "El mundo esta salvado!";
    //Aqui se define la forma de las funciones que se pueden guardar en la variable
    let myFunction;
    //let myFunction : (x:string ) => string;
    //let myFunction : ( ) => void;
    myFunction = addNumber;
    //myFunction = greet;
    //myFunction = saveTheWorld;
    console.log(myFunction(10, 1));
})();
export {};
//# sourceMappingURL=FunctionType.js.map