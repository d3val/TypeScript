(()=>{
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string|number|Hero='Juan';
  console.log(myCustomVariable);

  myCustomVariable=20;
  console.log(myCustomVariable);

  myCustomVariable={
    name:'Bruce',
    age: 30,
    powers:['Millonario'],
  }
  console.log(myCustomVariable);
})()