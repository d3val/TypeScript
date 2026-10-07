(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log("Constructor de Avenger llamado");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class XMen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
      console.log("Constructor X-Men llamado");
    }

    GetFullNameFromXmen(){
        console.log(super.getFullName())
    }
    get fullName(): string {
        return `${this.name} - ${this.realName}`;
    }
    set fullName(name:string){
        this.name = name;
    }
  }

  const wolverine = new XMen("Wolverine", "Logan", true);
  wolverine.GetFullNameFromXmen();
  console.log(wolverine.fullName);
  wolverine.fullName = "Juan" ;
  console.log(wolverine.fullName);
})();
