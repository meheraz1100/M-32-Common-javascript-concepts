/**
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined.
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesnot exists on an object will give undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly undefined
 */

let first;
// console.log(first);

function second(){
    const total = a + b;
}

// const result = second();


function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}

// third(2, 5);



// console.log(result);

function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}

const total = noNegative(2, 5);
// console.log(total);

const fifth = { id: 2, name: 'ponchom', age: 40};
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 45];
//  you should not do it. instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[2], sixth[200]);
// console.log(sixth)

const eighth = undefined;

const nineth = { result: [], updated: null};

// console.log(typeof undefined);
console.log(typeof null);