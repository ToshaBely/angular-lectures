function makeArr<T>(arg: T): T[] {
  return [arg];
};

console.log(makeArr<string>('abc'), makeArr<number>(123), makeArr('a1b2c3'));

type onOff = 'on' | 'off';
let someStatus: onOff = 'on';

enum daysOfWeek {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
};

let today = daysOfWeek.Fri;
