// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/



export function makeArrayOfNames(arr) {
    const names = [];
    arr.forEach((object) => {
        names.push(object.name);
    })
    return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reverse = [];
    arr.forEach((object) => {
        reverse.push(object.type);
    })
    return reverse.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanish = [];
    arr.forEach((object) => {
        spanish.push({nombre: object.name, tipo: object.type});
     })
    return spanish;
}

