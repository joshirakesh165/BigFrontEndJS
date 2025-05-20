function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  // your code here

  let count = 0;

  async function helper() {
    try {
      return await fetcher();
    } catch (e) {
      count++
      if(count <= maximumRetryCount) {
        return helper();
      } else {
        return Promise.reject(e);
      }
    }
  }
  return helper();

}
