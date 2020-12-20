const obj = {};
const obj2 = {};
const str = 'Hello';
const num = 25;

obj[obj2] = 'obj';
obj[str] = 'There';
obj[num] = 30;

for (const key in obj) {
    console.log(key, typeof key);
}