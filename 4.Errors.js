const { errorHandler, two } = require("./errorHandler.js");

// import two from "./errorHandler.js"    //for default export



async function getData() {
    try {
        // undefined.find();

        const emailError = new Error("Email already exists!")
        throw emailError;

    } catch (error) {
        // errorHandler(error)
        // console.log(error);
    }
}
getData();
two();