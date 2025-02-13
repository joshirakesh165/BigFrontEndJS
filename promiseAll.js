function all(promises) {
    // your code here
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                results[i] = res;
                count++;
            }).catch(error => {
                reject(error)
            }).finally(() => {
                if (count == promises.length) resolve(results);
            })
        }
    })

}



let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000)
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 1000)
});

all([p1, p2, p3, p4])
    .then(result => console.log(result))
    .catch(error => console.log(error))
