(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armor suit",
    };
    const cap = {
        name: "Captain America",
        weapon: "Shield",
    };
    const Thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, Thor, cap];
    //Es como un for each de c#
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
export {};
//# sourceMappingURL=ForOf.js.map