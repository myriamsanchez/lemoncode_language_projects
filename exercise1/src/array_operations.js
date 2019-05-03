const array = ["one", "two", "three", "more elements"];


// head operation
const head = ( [head] ) => { return head };


// tail operation
const tail = ( [,...tail] ) => { return tail };


// init operation
const init = ( array ) => { return array.slice(0, array.length - 1) };

// last operation
const last = ( array ) => { return array[array.length -1];
};

console.log('head of array', head(array));
console.log('tail of array', tail(array));
console.log('init of array', init(array));
console.log('last item of array', last(array));