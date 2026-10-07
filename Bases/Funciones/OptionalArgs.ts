(()=>{
    const fullName = (firstName: string, lastName?: string, upper:boolean = false) => {
        if(upper) return `${firstName} ${lastName || `No last name`}`.toUpperCase(); 
        return `${firstName} ${lastName || `No last name`}`;
    }

    const name = fullName("Juan","Perez",true);

    console.log(name);
})();