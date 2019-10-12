const myGetHttp = (url) => {
    return new Promise((resolve, reject) => {
        resolve(`This is a dummy HTTP response for GET ${url}`);
    });
};

const myParser = (string) => {
    return new Promise((resolve, reject) => {
        resolve(`This is the parsed response: ${string}`);
    });
}

const myDbSaver = (dataToSave) => {
    return new Promise((resolve, reject) => {
        resolve(`This data is saved: ${dataToSave}`);
    });
}

const notifyUser = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`User is notified about this: ${message}`);
    });
}

async function promiseHell() {
    // myGetHttp('http://api.something.com/do').then((response) => {
    //     console.log('Got HTTP response');
    //     myParser(response).then((parsed) => {
    //         console.log('Got parsed HTTP response');
    //         myDbSaver(parsed).then((message) => {
    //             console.log('Response is saved in the DB');
    //             notifyUser(message).then((result) => {
    //                 console.log(result);
    //             }).catch((error) => {
    //                 console.log('Something bad happened', error);
    //             });
    //         }).catch((error) => {
    //             console.log('Something bad happened', error);
    //         });
    //     }).catch((error) => {
    //         console.log('Something bad happened', error);
    //     });
    // }).catch((error) => {
    //     console.log('Something bad happened', error);
    // });
    try {
        let a = await myGetHttp('http://api.something.com/do');
        let b = await myParser(a);
        let c = await myDbSaver(b);
        let d = await notifyUser(c)
        console.log(d);

    } catch (e) {
        console.log(e);
    }
}

promiseHell();