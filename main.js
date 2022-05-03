const obj1 = {
    a: "a",
    b: "b",
    c:{
        d:"d",
        e:"e",
    }
};

const obj2 = {};
for(prop in obj1){ //Por cada propiedad en obj1.
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1); // Crea un nuevo objeto usando como prototipo a obj1.