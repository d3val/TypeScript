function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (condition: boolean = false): Function => {
  return () =>
    condition ? console.log("Hola mundo") : console.log("Nada que imprimir");
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonID(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("Pokemon no existe");
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: any) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Juan";
      },
      set(this, val) {
        console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

//Los decoradores solo se ejecutan una vez donde se indica.
@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  @readonly()
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonID()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
