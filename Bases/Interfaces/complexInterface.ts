(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Juan",
    age: 25,
    address: {
      id: 12,
      zip: "KY2",
      city: "CDMX",
    },
  };
})();
