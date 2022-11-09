
async function getData() {
    try {
        // undefined.find();

        const emailError = new Error("Email already exists!")
        throw emailError;

    } catch (error) {
        errorHandler(error)
        // console.log(error);
    }
}
getData();

function errorHandler(error) {
    const { name, message, stack } = error;
    // console.log(error);
    console.log(name);
    // console.log(message);
    // console.log(stack);

    // logger.error({
    //     name,
    //     message,
    //     stack,
    // });
    // console.log("Internal server error!");
}

console.log("Done!");