function undefinedToNull(arg) {

  function inner(arg) {
    if (arg == undefined) return null;

    if (Array.isArray(arg)) {
      return arg.map(el => el = inner(el));
    } else {
      if (arg && typeof arg == 'object') {
        let keys = Object.keys(arg);
        keys.forEach(el => arg[el] = inner(arg[el]));
        return arg;
      };
      return arg;
    }
  }

  return inner(arg);
}

let res = undefinedToNull({a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }});
console.log(res);
