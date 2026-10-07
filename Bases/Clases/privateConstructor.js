(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis");
            }
            return this.instance;
        }
        changeName(newName) { this.name = newName; }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis, apocalipsis2, apocalipsis3);
    apocalipsis.changeName('Xavier');
    console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
export {};
//# sourceMappingURL=privateConstructor.js.map