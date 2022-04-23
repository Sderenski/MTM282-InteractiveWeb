const loadScript = (src) => {
  return new Promise((ok, nope) => {
    const tag = document.createElement('script');
    tag.src = src;
    tag.onload = () => {
      return ok(tag);
    }
    tag.onerror = () => {
      return nope(new Error(`Could not load script ${src}`));
    }
    document.head.append(tag);
  });
};


// Resolve and reject are built in functions in a promise.
const myPromise = () => {
  console.log("Before return")
  new Promise(function(resolve, reject) {
    if (1 < 3) {
      return resolve();
    }
    if (true){
      return resolve();
    }
    reject();
    console.log("After Return")
  });
};

myPromise();