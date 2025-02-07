function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (n) => {
    // write your code to return the first bad version
    // if none found, return -1
        let mid;
        let min = 0;
        let max = n;
        let isFound = false;

        while(min <= max) {
          mid = Math.ceil((min + max)/2);
            if(isBad(mid)){
                max = mid -1;
                isFound = true;
            } else {
                min = mid + 1;
            }

        }

        return  isFound ? min : -1;
  }
}
 
console.log(firstBadVersion((i) => i >= 4)(100))
console.log(firstBadVersion((i) => i >= 4)(4))  
console.log(firstBadVersion((i) => i >= 5)(3))  
console.log(firstBadVersion((i) => i >= 1)(1))  
console.log(firstBadVersion((i) => i >= 1)(2))  
