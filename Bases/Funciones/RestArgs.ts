(()=>{

    const fullName = (firstName:string, ...restArgs:string[]):string=>{
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName("Juan","Perez","Martinez","De la Cruz");

    console.log(superman);
})()