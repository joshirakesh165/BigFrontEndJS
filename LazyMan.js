function LazyMan(name, logFn) {

  let list = [];
  
  let index = -1;

  const greetFn = () => {
    logFn(`Hi, I'm ${name}.`);
    runNextTaskFromList();
  }

  const eatFn = (val) => {
    logFn(`Eat ${val}.`);
    runNextTaskFromList();
  }

  const sleepFn = (n) => {
    setTimeout(() => {
      logFn(`Wake up after ${n} second` + (n > 1 ? 's.' : '.'));
      runNextTaskFromList();
    }, n * 1000)
  }


  function runNextTaskFromList() {
    ++index;
    if (list[index]) {
      list[index]();
    }

  }


  setTimeout(() => {
    runNextTaskFromList();
  }, 0)

  list.push(greetFn);

  return {
    eat: function (val) {
      list.push(eatFn.bind(this, val))
      return this;
    },
    sleep: function (n) {
      list.push(sleepFn.bind(this, n))
      return this;
    },
    sleepFirst: function (n) {
      list.unshift(sleepFn.bind(this, n))
      return this;
    },
  }
}
