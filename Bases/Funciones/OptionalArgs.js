(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || `No last name`}`.toUpperCase();
        return `${firstName} ${lastName || `No last name`}`;
    };
    const name = fullName("Juan", "Perez", true);
    console.log(name);
})();
export {};
//# sourceMappingURL=OptionalArgs.js.map