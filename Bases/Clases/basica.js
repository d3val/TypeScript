(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    //private name: string;
    //private team: string;
    //public realName: string;
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
export {};
//# sourceMappingURL=basica.js.map