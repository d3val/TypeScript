(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            console.log("Mundo salvado!");
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            console.log("Mundo conquistado!");
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    console.log(wolverine);
    const magneto = new Villain("Magneto", "Erick");
    console.log(magneto);
    wolverine.salvarMundo();
    magneto.conquistarMundo();
    const printName = (character) => { console.log(character.realName); };
    printName(magneto);
})();
export {};
//# sourceMappingURL=abstract.js.map