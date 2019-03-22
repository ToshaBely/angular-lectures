function logCool(): void {
  console.log('I am cool function!');
}


function anyType() {
  let a: number = 5;
  // a = '6';

  let b: any = 5;
  b = '6';
}

function args() {
  function logName(firstName: string, lastName?:string): void {
    console.log(`Name: ${firstName} ${lastName}`);
  }

  logName('a');
  logName('a', 'b');
  // logName('a', 'b', 'c');

  function logAll(first: string, ...other: number[]): void {
    console.log(first);
    other.forEach( (a: number) => console.log(a) );
  }

  logAll('Test', 1, 2, 3, 4, 5);
}
