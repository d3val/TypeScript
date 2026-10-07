(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName("Juan", "Perez", "Martinez", "De la Cruz");
    console.log(superman);
})();
export {};
//# sourceMappingURL=RestArgs.js.map