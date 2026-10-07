(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armor suit",
  };

  const cap: Avenger = {
    name: "Captain America",
    weapon: "Shield",
  };

  const Thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, Thor, cap];

  //Es como un for each de c#
  for (const avenger of avengers) {
    console.log(avenger);
  }
})();
