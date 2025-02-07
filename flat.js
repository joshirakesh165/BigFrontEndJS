function flat(arr,depth){
    let result = [];
    function inner (arr,d) {
        arr.forEach(element => {
            if(Array.isArray(element) && d >= 0){
                inner(element,--d);
            } else {
                result.push(element);
            }
        });
        return result;    
    }
    return inner(arr,depth);

}



console.log(flat([1,[2],[3,[4]]], 1))
