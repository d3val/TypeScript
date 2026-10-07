(()=>{
    const addNumber = (a:number, b: number) => a+b;
    const greet=(greeting:string)=> `Hola ${greeting}`
    const saveTheWorld=()=>"El mundo esta salvado!"

    //Aqui se define la forma de las funciones que se pueden guardar en la variable
    let myFunction : (x:number,y:number ) => number;
    //let myFunction : (x:string ) => string;
    //let myFunction : ( ) => void;

    myFunction = addNumber;

    //myFunction = greet;

    //myFunction = saveTheWorld;

    console.log(myFunction(10,1));

})()