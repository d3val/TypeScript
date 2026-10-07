(()=>{
    const fullName = (firstName: string, lastName: string) => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName("Juan", "Perez");

    console.log(name);
})();