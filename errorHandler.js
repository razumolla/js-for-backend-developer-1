console.log(module);


module.exports.errorHandler = function errorHandler(error) {
    const { name, message, stack } = error;
    // console.log(error);
    // console.log(name);
    console.log(message);
    // console.log(stack);
    // logger.error({
    //     name,
    //     message,
    //     stack,
    // });
    // console.log("Internal server error!");
}

// console.log("Done!");

// module.exports = errorHandler;

function two() {
    console.log("two");
}




// module.exports => 3/4 vabe kaj kora jai

// 1
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// 2
// module.exports = {
//     errorHandler: errorHandler,
//     two: two,
// }

// 3
// module.exports = {
//     errorHandler,
//     two,
// }

// 4
// module.exports.two = function two() {
//     console.log("two");
// }


console.log(module);

// export errorHandler;
// export default two;

