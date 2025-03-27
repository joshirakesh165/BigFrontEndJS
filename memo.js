function memo(func, resolver) {
    let cache = {};

    return function () {
        let argsArr = [...arguments]
        let key = resolver ?  resolver.apply(null,argsArr) : arsArr.join('_')
        let resultFromCache = cache[key];
        if (resultFromCache) return resultFromCache;
        let result = func.apply(this, argsArr);
        cache[key] = result;
        return result;
    }
}
const func = (arg1, arg2) => {
    return arg1 + arg2
}
const memoed = memo(func)
memoed(1, 2)
// 3, func is called
memoed(1, 2) 
