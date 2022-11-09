// Promise has 3 step > 1.Pending  2.Resolved  3.Rejected 
// promise > He(promise) said he will bring me the data

const myPromise = new Promise((resolve, reject) => {
    // const user = null;
    const user = { id: 1 };
    if (!user) {
        reject("Something went wrong!");
    } else {
        setTimeout(() => {
            resolve({name:"Razu"});
        }, 1000)
    }
});

// now i we consume(promise theke data powa) the promise

const userIds = [1, 2, 3, 4, 5];  //from front-end side
let userData = [];

for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    myPromise.then(user => {
        userData.push(user);
    })
}

// console.log(userData);

Promise.all(userData).then(res => console.log("After Promise", res))


myPromise
    .then(res => console.log("Then Error", res))
    .catch(err => console.log("Catch Error", err));

console.log("Done");






