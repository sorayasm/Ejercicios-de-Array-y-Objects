const cars = [
    ["brand", "Ford"],
    ["model", "Mustang"],
    ["year", 1964]
];

const arrayToObject = function(array2d) {
    const newObject = {};
    for (i = 0; i < array2d.length; i++) {
        newObject[array2d[i][0]] = array2d[i][1];
    }
    return newObject;
}
console.log(arrayToObject(cars));

const cars2 = {
    brand: "Opel",
    model: "Corsa",
    year: 1999
}

const objectToArray = function(object) {
    const array2d = [];
    const properties = Object.keys(object);
    for (i = 0; i < properties.length; i++) {
        array2d.push([properties[i], object[properties[i]]]);
    }
    return array2d;
}
console.log(objectToArray(cars2));