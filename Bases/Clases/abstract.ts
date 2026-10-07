(() => {
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutante {
    public salvarMundo(): void {
      console.log("Mundo salvado!");
    }
  }
  class Villain extends Mutante {
    public conquistarMundo(): void {
      console.log("Mundo conquistado!");
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  console.log(wolverine);
  const magneto = new Villain("Magneto", "Erick");
  console.log(magneto);
  wolverine.salvarMundo();
  magneto.conquistarMundo();
  const printName = (character:Mutante)=>{console.log(character.realName)};
  printName(magneto);
})();
