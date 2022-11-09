const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success!");
    }, 1000)
});

async function getData() {
    // const res=[];
    const res = await promise;
    console.log(res);
}
getData();

//after calling fetch , fetch will return promise
fetch("")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err));


async function getUser() {
    const res = await fetch("")
    const data = await res.json();

    const res2 = await fetch(`https:/www.example.com/${user.id}`);
    const products = res2.json();

    console.log(products);
}



