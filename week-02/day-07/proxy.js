const target = {};
const handler = {
    get: function (targetObject, field) {
        if (field === 'nextId') {
            console.log('asd')
            if (targetObject[field] === undefined) {
                targetObject[field] = 1;
                return targetObject[field];
            } else {
                targetObject[field] += 1;
                return targetObject[field];
            }
        } else {
            return undefined;
        }

    }
};
const proxyObject = new Proxy(target, handler);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);