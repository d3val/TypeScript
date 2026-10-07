(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor de Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class XMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor X-Men llamado");
        }
        GetFullNameFromXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new XMen("Wolverine", "Logan", true);
    wolverine.GetFullNameFromXmen();
    console.log(wolverine.fullName);
    wolverine.fullName = "Juan";
    console.log(wolverine.fullName);
})();
export {};
//# sourceMappingURL=extends.js.map