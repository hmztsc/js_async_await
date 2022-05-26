(async () => {

    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        await (() => {
            return new Promise(async(resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
                
            });
        })()
        .then(() => {
            console.log(index);
        });

    }

})();
